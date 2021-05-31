// pages/order/order.js
import wxPayUtil from "../../wxpay/wxPayUtil";
import config from "../../wxpay/config";

var util = require('../../utils/util.js');
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{
      name: '已完成',
      index: 0
    }, {
      name: '未完成',
      index: 1
    }, {
      name: '已取消',
      index: 2
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },

  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },



  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function (e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },



  orderShow: function () { //查看自己订单
    var phone = app.globalData.userInfo.nickName; //同send1
    console.log("phone:",phone)
    wx.request({
      url: 'http://175.27.138.218:8080/luyu/ground/myorder',
      data: {
        phone: phone //同send1
      },
      success: (res) => { //返回所有信息，可点开控制台下data查看，可选需要的信息调用
        console.log(res)
        var order0 = []
        var order1 = []
        var order2 = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].status == 0) {
            order0.push(res.data[i])
          } else if (res.data[i].status == 1) {
            order1.push(res.data[i])
          } else {
            order2.push(res.data[i])
          }
        }
        let that = this
        switch (this.data.currtab) {
          case 0:
            that.alreadyShow(order0)
            break
          case 1:
            that.waitPayShow(order1)
            break
          case 2:
            that.lostShow(order2)
            break
        }
      },
      fail: () => {
        console.log("fail");
      },
      fail: function (e) {
        wx.showModal({
          title: '报错',
          content: JSON.stringify(e)
        })
      },
    })
  },

  refund: function (option) {
    var that = this;
    wx.showModal({

      title: '提示',

      content: '退款后订单将取消，本操作不可撤销！',

      success: function (res) {

        if (res.confirm) { //这里是点击了确定以后  
          let uuid = option.currentTarget.dataset['uuid'];
          let money = option.currentTarget.dataset['money'];
          let key = config.key;
          console.log("uuid", uuid);
          console.log(typeof uuid);
          console.log("money", money);
          let orderId = '';
          wx.request({
            url: 'http://175.27.138.218:8080/luyu/ground/refund',
            data: {
              uuid: uuid
            },
            success(res) {
              orderId = res.data;
              let data = {
                out_trade_no: orderId,
                mch_id: config.mch_id,
                money: money
              }
              let sign = wxPayUtil.wxPaySign(data, key);
              data.sign = sign;
              console.log(data);
              wx.request({ //退款
                url: 'https://api.pay.yungouos.com/api/pay/wxpay/refundOrder',
                method: 'POST',
                data: data,
                header: {
                  "content-type": "application/x-www-form-urlencoded"
                },
                success(res) {
                  console.log("data", data)
                  console.log("data:", typeof data);
                  console.log("succcess res", res);
                },
                fail(res) {
                  console.log("fail res", res);
                }
              })
            }

          })        
          that.setData({
            currtab: '已完成'
          }) 
        } else { //这里是点击了取消以后
        }

      }

    })
    



  },

  alreadyShow: function (res) {
    var info = []
    for (var i = 0; i < res.length; i++) {
      var reserveTime = res[i].orderSlot.split("-")
      info[i] = {
        name: res[i].name + " " + res[i].num,
        state: "交易成功",
        time: res[i].todayTime + "  " + reserveTime[0] + ":00-" + reserveTime[1] + ":00",
        status: "已完成",
        url: "../../images/bad0.png",
        money: res[i].price
      }
    }
    this.setData({
      alreadyOrder: info
    })
  },

  waitPayShow: function (res) {
    var info = []
    for (var i = 0; i < res.length; i++) {
      var reserveTime = res[i].orderSlot.split("-")
      info[i] = {
        name: res[i].name + " " + res[i].num,
        state: "交易成功",
        time: res[i].todayTime + "  " + reserveTime[0] + ":00-" + reserveTime[1] + ":00",
        status: "未完成",
        url: "../../images/bad0.png",
        money: res[i].price,
        uid: res[i].uuid
      }
    }
    this.setData({
      waitPayOrder: info
    })
  },


  lostShow: function (res) {
    var info = []
    for (var i = 0; i < res.length; i++) {
      var reserveTime = res[i].orderSlot.split("-")
      info[i] = {
        name: res[i].name + " " + res[i].num,
        state: "交易取消",
        time: res[i].todayTime + "  " + reserveTime[0] + ":00-" + reserveTime[1] + ":00",
        status: "已取消",
        url: "../../images/bad0.png",
        money: res[i].price,
        uid: res[i].uuid
      }
    }
    this.setData({
      lostOrder: info
    })
  }


})