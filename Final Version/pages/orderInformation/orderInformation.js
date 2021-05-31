// pages/orderInformation/orderInformation.js
import wxPayUtil from "../../wxpay/wxPayUtil";
var util = require('../../utils/util.js');
const app=getApp()


Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    price:null
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(app.globalData.payStatus!=null&&app.globalData.payStatus!=undefined){
      let orderno=app.globalData.orderNo;
      let payStatus=app.globalData.payStatus;
      console.log('接收到返回支付结果: ',payStatus);
      console.log('订单号: ',orderno);
      //处理您自己的业务
      if(payStatus){
        this.sendDB();
        wx.showToast({
          title: '支付成功',
          icon: 'success',
          duration: 2000
        }),
        wx.switchTab({
          url: '../my/my',
        }),
        app.globalData.payStatus=null;
        //app.globalData.orderNo=null;
      }else{
        wx.navigateBack({
          delta: 1,
        }),
        app.globalData.payStatus=null;
      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
 
onLoad: function (options) {
  var time = util.formatTime(new Date());
  console.log("time", time);
  console.log(options);
  const orderInfo = options.orderInfo
  const num=JSON.parse(orderInfo).length
  var date = options.date
  // var times=new Array()
  // var names=new Array()
  var dict = []
  var dict_db = []
  for (var i=0;i<num;i++)
  {
    dict.push({
      key:   JSON.parse(orderInfo)[i].time,
      value: JSON.parse(orderInfo)[i].id+'号场地',
      date: JSON.parse(orderInfo)[i].date
    })
    dict_db.push({
      key:   JSON.parse(orderInfo)[i].time[0]+JSON.parse(orderInfo)[i].time[1]
             +"-"+JSON.parse(orderInfo)[i].time[6]+JSON.parse(orderInfo)[i].time[7],
      value: JSON.parse(orderInfo)[i].id+'号场地'
    })
  }
  const totalPrice=options.totalPrice
  //this.data.price=parseInt(totalPrice.substr(1)) //实际价格
  this.data.price=0.01*num //测试价格
  const venueName=options.venueName
  const singlePrice=parseInt(totalPrice.substr(1,totalPrice.length-1))/num
  console.log("key:", dict_db[0].value[0]);
  console.log(dict[0]);
  console.log(num);
  console.log(totalPrice);
  console.log(venueName);
  console.log(date);
  this.setData({
    orderInfo: orderInfo,
    num:num,
    totalPrice:totalPrice,
    veuneName:venueName ,
    singlePrice:singlePrice,
    dict:dict,
    dict_db:dict_db,
    time:time,
    date:date
})
},

toPay:function(){ //支付
  const price=this.data.price
  //订单号
  let out_trade_no=wxPayUtil.getOrderNo("WA");
  //商品简称
  let body='商品';
  //回调地址
  let notify_url='';

  let attach="我是附加参数，我会在被原路传送到回调地址";

  let title='体育馆'//收银台标题显示名称 xxx-收银台
  //支付
  wxPayUtil.toPay(out_trade_no,price,body,notify_url,attach,title,
    (response)=>{
    console.log(response);
  })

},

sendDB:function(){
  for (var i=0;i<this.data.num;i++)
    { 
      var data={
        name:this.data.veuneName,
        num:this.data.dict_db[i].value[0],
        orderId: app.globalData.orderNo,
        todayTime:this.data.dict[i].date,
        orderSlot:this.data.dict_db[i].key,
        phone:app.globalData.userInfo.nickName,
        price:0.01, //应该是单价singlePrice，0.01为测试数据
        status: 1
      };
      console.log("用户名：",data.phone)
      this.send2(data)
    }
},
send2:function(data){//订票
  //name场地名，num：场地编号：1234，todaytime：订票日期(不一定是当天，7天之内)，orderslot：订票时间段，phone：微信名(当前无法获取phone—_num先用微信名代替)
  
  // var data = {name:' ',num:'',todayTime:date,orderSlot:"19-20",phone:16603891841};


  //data是一个对象，参数要传完整
  wx.request({
    url: 'http://175.27.138.218:8080/luyu/ground/orderground',
    data: JSON.stringify(data),//只变data，其他不动
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    success:(res) => {
      console.log(res);//无返回值，控制台打印订票成功
    },
    fail:() => {
      console.log("fail");
    },
    fail: function (e){
      wx.showModal({
        title: '报错',
        content: JSON.stringify(e)
      })
      },
})
},
handleData:function(){
   

},
// showData:function (options) {
//   console.log(options);
//   const orderInfo = options.orderInfo
//   console.log(orderInfo);
// },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})