// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        name:'已发布的活动',
        content:[]
      },
      {
        name: '已参加的活动',
        content: []
      },
    ],
    curIndex:0,
    curContent:[],
    showDialog: false,
    userInfo:{}
  },
  goEditor(){
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },
    jumpset:function() {
      wx.navigateTo({
        url: '../set/set',
      })
  },
  part1(e){
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
    let index = e.currentTarget.dataset.index;
    let curContent = that.data.lists[index].content;
    that.setData({
      curIndex:index,
      curContent
    })
    wx.hideLoading();
    }, 500)

  },
  toggleDialog() {
    wx.removeStorageSync('index')
    this.setData({
      showDialog: false
    })
  },
  tosalonDetail: function (e) {
    wx.navigateTo({
      url: `/pages/salon_detail/salon_detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  isClicked: function () {
    let sponsors = wx.getStorageSync('sponsors')
    let index = wx.getStorageSync('index');
    this.data.curContent[index].isFollowed = false;
    let curContent = this.data.curContent;
    for (let i = 0; i < sponsors.length; i++) {
      if (sponsors[i].name == curContent[index].name) {
        sponsors[i] = curContent[index];
      }
    }
    this.data.lists[2].content.splice(index, 1)
    let lists = this.data.lists;
    wx.setStorageSync('sponsors', sponsors)
    this.setData({
      lists,
      curContent
    })
    this.toggleDialog();
  },
  go_sponsorDetail(e) {
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/sponsor_detail/sponsorDetail?name=${name}`,
    })
  },
  follow: function (e) {
    let index = e.currentTarget.dataset.index;
    let sponsors = wx.getStorageSync('sponsors')
    let isFollowed = this.data.curContent[index].isFollowed;
    if (isFollowed) {
      wx.setStorageSync('index', index);
      this.setData({
        showDialog: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
        wx.setNavigationBarTitle({
          title: that.data.nickName
        })
      },
    })
  },
  getFollowed(sponsors){
    let content = [];
    for(let i = 0; i<sponsors.length;i++){
      if(sponsors[i].isFollowed){
        content.push(sponsors[i])
      }
    }
    this.data.lists[2].content = content;
    let lists = this.data.lists;
    this.setData({
      lists
    })
  },
  getSalons(all) {
    let list = [];
    for (let i = 0; i < all.length; i++) {
      for (let j = 0; j < all[i].totalSalons.salons.length; j++) {
        all[i].totalSalons.salons[j]["name"] = all[i].name;
        all[i].totalSalons.salons[j]["avatar"] = all[i].imgUrl;
      }
      list.push(...all[i].totalSalons.salons)
    }
    return list;
  },
  getInterest(sponsors){
    let content = [];
    let salons = this.getSalons(sponsors);
    for (let i = 0; i < salons.length; i++) {
      if (salons[i].isInterest) {
        content.push(salons[i])
      }
    }
    this.data.lists[1].content = content;
    let lists = this.data.lists;
    this.setData({
      lists
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
      wx.hideLoading()
      let sponsors = wx.getStorageSync('sponsors')
      let userInfo = wx.getStorageSync('userInfo')
      that.setData({
        userInfo
      })
      that.getInterest(sponsors);
      // this.getJoins();
      that.getFollowed(sponsors);
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
    }, 1000)
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