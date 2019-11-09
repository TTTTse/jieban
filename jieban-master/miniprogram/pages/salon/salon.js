// miniprogram/pages/salon/salon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  tosalonDetail: function (e) {
    wx.navigateTo({
      url: `/pages/salon_detail/salon_detail?id=${e.currentTarget.dataset.id}`,
    })
  },
 /** getSalons(all){
    let list = [];
    for(let i=0; i<all.length;i++){
      for (let j = 0; j < all[i].totalSalons.salons.length;j++){
        all[i].totalSalons.salons[j]["name"] = all[i].name;
        all[i].totalSalons.salons[j]["avatar"] = all[i].imgUrl;
      }
      list.push(...all[i].totalSalons.salons)
    }
    this.setData({
      list
    })
  },
  /**setUserInfo(){
    let userInfo = wx.getStorageSync('userInfo')
    if(!userInfo){
      userInfo = {phone:'',wx:'',name:'',sex:'男',company:'',zhiwei:'',zhiye:''}
    }
    wx.setStorageSync('userInfo', userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '广场'
    })
    /**let that = this;
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      let sponsors = wx.getStorageSync('sponsors');
      if (sponsors) {
        that.getSalons(sponsors);
      } else {
        wx.request({
          url: 'https://www.easy-mock.com/mock/5cf34b4428263d2e19427451/zr-data1/zr',

          success: (res) => {
            that.getSalons(res.data.data.sponsors);
            wx.setStorageSync('sponsors', res.data.data.sponsors)
          }
        })
      }
      that.setUserInfo()
      wx.hideLoading()
    }, 500)
    
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