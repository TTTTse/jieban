// pages/activityInfo/activityInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    index: 0,
    value: '',

  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
    const id = ['name','category','time','address','person']
    let index = this.data.index;
    let activityInfo = wx.getStorageSync('activityInfo')
    activityInfo[id[index]] = e.detail.value.textarea;
    wx.setStorageSync('activityInfo', activityInfo)
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const name = ['活动名','活动类型','活动时间','活动地点','活动人数']
    const id = ['name','category','time','address','person']
    let index = +options.index;
    let title = name[index];
    let activityInfo = wx.getStorageSync('activityInfo')
    let value = activityInfo[id[index]]
    this.setData({
      title,
      index,
      value
    })
    wx.setNavigationBarTitle({
      title
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