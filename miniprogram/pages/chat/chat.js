// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        name: '聊天信息',
        content: []
      },
      {
        name: '系统信息',
        content: []
      },
    ],
    curIndex: 0,
    curContent: [],

  },
  part1(e) {
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      let index = e.currentTarget.dataset.index;
      let curContent = that.data.lists[index].content;
      that.setData({
        curIndex: index,
        curContent
      })
      wx.hideLoading();
    }, 500)

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

  }
})