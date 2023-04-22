// pages/home/home.js
Page({
  // 页面的初始数据
  data: {
    // isHighlight: [true, false, false, false]
  },

  // onTapBtn: function(event) {
  //   var index = event.target.dataset.index;
  //   var newIsHighlight = [false, false, false, false];
  //   newIsHighlight[index] = true;
  //   this.setData({
  //     isHighlight: newIsHighlight
  //   });
  // },

  // 排行榜
  doubleClick: function () {
    wx.navigateTo({
      url: '../rank/rank'
    })
  },

  // 开始比赛
  countdown: function () {
    wx.navigateTo({
      url: '../task/task'
    })
  },

  // 生命周期函数--监听页面加载
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

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