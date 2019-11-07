// miniprogram/pages/sponsor_detail/sponsorDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sponsor: {
    },
    lineClamp:3,
    open:false,
    showDialog: false,
    name:''
  },
  toggleDialog() {
    this.setData({
      showDialog: false
    })
  },
  isClicked: function () {
    this.data.sponsor.isFollowed = false;
    let sponsor = this.data.sponsor
    let sponsors = wx.getStorageSync('sponsors')
    for (let i = 0; i < sponsors.length; i++) {
      if (sponsors[i].name == sponsor.name) {
        sponsors[i] = sponsor;
      }
    }
    wx.setStorageSync('sponsors', sponsors)
    this.setData({
      sponsor
    })
    this.toggleDialog();
  },
  tosalonDetail: function (e) {
    wx.navigateTo({
      url: `/pages/salon_detail/salon_detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  follow: function () {
    let isFollowed = this.data.sponsor.isFollowed;
    if (isFollowed) {
      this.setData({
        showDialog: true
      })
    } else {
      isFollowed = !isFollowed;
      this.data.sponsor.isFollowed = isFollowed;
      let sponsor = this.data.sponsor
      let sponsors = wx.getStorageSync('sponsors')
      for (let i = 0; i < sponsors.length; i++) {
        if (sponsors[i].name == sponsor.name) {
          sponsors[i] = sponsor;
        }
      }
      wx.setStorageSync('sponsors', sponsors)
      this.setData({
        sponsor
      })
    }
  },
  
  openOrClose(){
    let open = this.data.open;
    open = !open;
    if(open){
      this.data.lineClamp = 100;
    }
    else{
      this.data.lineClamp = 3;
    }
    let lineClamp = this.data.lineClamp;
    this.setData({
      open,
      lineClamp
    })
    console.log(open,lineClamp)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主办方主页'
    })
    this.setData({
      name:options.name
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
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      let name = that.data.name;
      let sponsors = wx.getStorageSync('sponsors')
      for (let i = 0; i < sponsors.length; i++) {
        if (sponsors[i].name == name) {
          that.data.sponsor = sponsors[i];
        }
        let sponsor = that.data.sponsor
        that.setData({
          sponsor
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