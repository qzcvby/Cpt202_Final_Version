// pages/qrcode/qrcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenModal: true
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

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

  },
  data: {
    show:false
  },
  click:function(){
   this.setData({
     show:!this.data.show
   })
  },
  data: {
    showModal:false
  },
 
  // 外面的弹窗
  btn:function () {
    this.setData({
      showModal:true
    })
  },
 
  // 禁止屏幕滚动
  preventTouchMove:function () {
  },
 
  // 弹出层里面的弹窗
  ok:function () {
    this.setData({
      showModal:false
    })
  },
  navigateBack: function () {
    var self = this;
    var pages = getCurrentPages();
    if (pages.length == 1) {
    if (self.data.circleId && self.data.circleId >0) {
    wx.redirectTo({
    url: '../../circle/index/index?circleId=' + self.data.circleId
    + '&circleName=' + (self.data.circleName || '')
    });
    } else {
    wx.switchTab({
    url: "../../home/grouplist/grouplist"
    });
    }
    } else {
    wx.navigateBack({ changed: true });//返回上一页
    }
    },
    jumpPage: function(params){
      wx.navigateTo({
        url:"/pages/category/category"
      })
    },
    popSuccessTest: function () {
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success: function (res) {
          if (res.confirm) {
            console.log ('用户点击确定以后')
          } else {
            console.log ('用户点击取消以后')
          }
        }
      })
  
    }
 
})


