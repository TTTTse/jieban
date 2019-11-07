// miniprogram/pages/basicinfo/basicinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    index: 0,
    value:'',
    showDialog: false
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
    const id = ['phone', 'wx', 'name', 'sex', 'company', 'zhiwei', 'zhiye']
    let index = this.data.index;
    let userInfo = wx.getStorageSync('userInfo')
    userInfo[id[index]] = e.detail.value.textarea;
    wx.setStorageSync('userInfo', userInfo)
    wx.navigateBack();
  },
  toggleDialog() {
    wx.removeStorageSync('index')
    this.setData({
      showDialog: false
    })
  },
  chooseMan(){
    this.setData({
      value:'男'
    })
    this.toggleDialog();
  },
  chooseWoman() {
    this.setData({
      value: '女'
    })
    this.toggleDialog();
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
  chooseSex(){
    this.setData({
      showDialog: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const name = ['手机号', '微信号', '真实姓名', '性别', '公司', '职位', '职业经历']
    const id = ['phone', 'wx', 'name', 'sex', 'company', 'zhiwei', 'zhiye']
    let index = +options.index;
    let title = name[index];
    let userInfo = wx.getStorageSync('userInfo')
    let value = userInfo[id[index]]
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