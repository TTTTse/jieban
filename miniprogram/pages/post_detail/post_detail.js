// pages/post_detail/post_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityInfo:{},
    titlecolor:"blue",
    textcolor:"purple"

  },
  clicked(e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/activityInfo/activityInfo?index=${index}',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '活动信息填写',
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
      let activityInfo = wx.getStorageSync('avtivityInfo')
      if (activityInfo) {
        that.setData({
          activityInfo
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