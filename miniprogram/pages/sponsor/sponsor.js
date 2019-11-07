// miniprogram/pages/sponsor/sponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sponsors: [],
    showDialog: false
  },
  toggleDialog() {
    wx.removeStorageSync('index')
    this.setData({
      showDialog: false
    })
  },
  isClicked: function () {
    let index = wx.getStorageSync('index');
    this.data.sponsors[index].isFollowed = false;
    const sponsors = this.data.sponsors;
    wx.setStorageSync('sponsors', sponsors)
    this.setData({
      sponsors,
    })
    this.toggleDialog();
  },
  follow: function (e) {
    let index = e.currentTarget.dataset.index;
    let isFollowed = this.data.sponsors[index].isFollowed;
    if (isFollowed) {
      wx.setStorageSync('index', index);
      this.setData({
        showDialog: true
      })
    } else {
      isFollowed = !isFollowed;
      this.data.sponsors[index].isFollowed = isFollowed;
      const sponsors = this.data.sponsors;
      wx.setStorageSync('sponsors', sponsors)
      this.setData({
        sponsors
      })
    }
  },
  go_sponsorDetail(e) {
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/sponsor_detail/sponsorDetail?name=${name}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主办方'
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
      let sponsors = wx.getStorageSync('sponsors')
      that.setData({
        sponsors
      })
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
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)
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