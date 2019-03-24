// pages/liaotian/xinxi/xinxi.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.globalData.windowWidth,
    item: [
      {
        usename: 'wuliu',
        windowWidth: app.globalData.windowWidth,
        arr: [
          {
            title: '订单已签收',
            timer: '19/02/18',
            picurl: '/images/img1.png',
            describe: '独行少女·定制款·ins 韩 宽松百搭针织麻花背心吊带...',
            number: '3969452290320'
          },
          {
            title: '订单已签收',
            timer: '19/01/03',
            picurl: '/images/img1.png',
            describe: '独行少女·定制款·ins 韩 宽松百搭针织麻花背心吊带...',
            number: '3969452290320'
          },
          {
            title: '订单已签收',
            timer: '18/12/12',
            picurl: '/images/img1.png',
            describe: '独行少女·定制款·ins 韩 宽松百搭针织麻花背心吊带...',
            number: '3969452290320'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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