// miniprogram/pages/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  clicked(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/basicinfo/basicinfo?index=${index}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '用户信息',
    })
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
    let that = this;
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        that.setData({
          userInfo
        })
      }
      wx.hideLoading()
    }, 500)

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

  }
})