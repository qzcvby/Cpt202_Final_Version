//Page Object
Page({
  data: {

  },
  //需要先添加订票信息，数据库当前为空，根据添加的订票信息查询

  send1:function(){//初始化订票页面网格图（是否可选）
    var time = "2022-04-22";//替换为传参当天时间
    var name = "5球";//替换为传参场地名
    wx.request({
      url: 'http://175.27.138.218:8080/luyu/ground/listground',
      data:{
        name:name,//可选择调用data里的参数
        todayTime:time//可选择调用data里的参数
      },//其他不用动
      success:(res) => {
        console.log(res);
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
  send2:function(){//订票
    //name场地名，num：场地编号：1234，todaytime：订票日期(不一定是当天，7天之内)，orderslot：订票时间段，phone：微信名(当前无法获取phone—_num先用微信名代替)
    var data = {name:"5球",num:6,todayTime:"2022-04-22",orderSlot:"19-20",phone:16603891841};
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
send3:function(){//查看自己订单
  var phone = "16603891841";//同send1
  wx.request({
    url: 'http://175.27.138.218:8080/luyu/ground/myorder',
    data:{
      phone:phone//同send1
    },
    success:(res) => {//返回所有信息，可点开控制台下data查看，可选需要的信息调用
      console.log(res);
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

})