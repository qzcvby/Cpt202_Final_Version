// app.js
App({
 
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options) {
    //接受支付收银小程序返回的数据
    //参数示例：{"code": 0,data:{"order": "123456"},"msg": "支付成功"} 详情见文档 http://open.pay.yungouos.com/#/api/api/pay/wxpay/minPay
    if (options == null || options == '' || options.referrerInfo == null || options.referrerInfo=='') { 
      return;
    }
    let extraData=options.referrerInfo.extraData;
    console.log(extraData);
    if(extraData){
      //不管成功失败 先把支付结果赋值
      this.globalData.payStatus=extraData.code==0?true:false;
      if(extraData.code!=0){
        wx.showToast({
          title: extraData.msg,//错误提示
          icon: 'none',
          duration: 3000
        });
        return;
      }
      //支付成功
      this.globalData.orderNo=extraData.data.orderNo;
    }
  },
  globalData: {
    userInfo: null,
    payStatus:null,//支付状态
    orderNo:null
  }
})