// miniprogram/pages/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    phone:'',
    wechat:'',
    sex:'',
    Class:'',
    major:'',
  },
  /**formSubmit:function(e){
    var obj = this;
    var post = e.detail.value;
    wx.request({
      url: '',
      header:{
        'content-type': 'application/jason'
      },
      method:"POST",
      data:{
        username = post.username,
        phone = post.phone,
        wechat = post.wechat,
        sex = post.sex,
        major = post.sex,
        Class = post.Class,
      },
      success:function(res){
        console.log(res.data);
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '设置成功!',
          icon: 'success',
          duration: 2000
        })
      },
      fail:function(){
        console.log('提交失败');
      }
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