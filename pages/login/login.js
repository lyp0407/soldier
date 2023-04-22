// pages/login/login.js
Page({
  //  页面的初始数据
  data: {
    userInfo: "", //昵称
    avatarUrl: "", //头像
    LoginFlag: false, //开关
  },

  // 点击登录
  doubleClick: function () {
    wx.redirectTo({
      url: '../novice/novice'
    })
  },

  // 欢迎页的登录
  userClick: function () {
    this.setData({
      LoginFlag: true,
    })
    // 获取用户信息
    wx.getUserProfile({
      desc: '必须授权才能继续使用',
      success: (res) => {
        console.log('授权成功', res);
        this.setData({
          userInfo: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
        wx.setStorageSync("User", res)
      },
      fail: (err) => {
        console.log('授权失败', err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      userInfo: wx.getStorageSync("User").userInfo.nickName,
      avatarUrl: wx.getStorageSync("User").userInfo.avatarUrl,
    })
    if (this.data.userInfo) {
      this.setData({
        LoginFlag: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})