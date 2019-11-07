// miniprogram/pages/salon_detail/salon_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salon:{},
    id:''
  },
  openOrClose() {
    let open = this.data.open;
    open = !open;
    if (open) {
      this.data.lineClamp = 100;
    }
    else {
      this.data.lineClamp = 2;
    }
    let lineClamp = this.data.lineClamp;
    this.setData({
      open,
      lineClamp
    })
    // console.log(open, lineClamp)
  },
  weatherToAdd() {
    
  },
  beInterest(){
    let isInterest = this.data.salon.isInterest;
    this.data.salon.isInterest = !isInterest;
    let salon = this.data.salon
    let sponsors = wx.getStorageSync('sponsors')
    for(let sponsor of sponsors){
      for(let sal of sponsor.totalSalons.salons){
        if(salon.id == sal.id){
          sal.isInterest = !isInterest;  
        }
      }
    }
    wx.setStorageSync('sponsors', sponsors)
    this.setData({
      salon
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    wx.setNavigationBarTitle({
      title: '沙龙详情',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getSalons(sponsors) {
    let list = [];
    for (let i = 0; i < sponsors.length; i++) {
      for (let j = 0; j < sponsors[i].totalSalons.salons.length; j++) {
        sponsors[i].totalSalons.salons[j]["name"] = sponsors[i].name;
        sponsors[i].totalSalons.salons[j]["avatar"] = sponsors[i].imgUrl;
      }
      list.push(...sponsors[i].totalSalons.salons)
    }
    for(let salon of list){
      if(salon.id == this.data.id){
        this.data.salon = salon;
      }
    }
    let salon = this.data.salon;
    this.setData({
      salon
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    let sponsors  =wx.getStorageSync('sponsors')
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      that.getSalons(sponsors);
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