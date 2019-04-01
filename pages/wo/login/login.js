// pages/wo/login/login.js

const app = getApp()

Page({
  data: {
    username: "",
    password: "",
    windowWidth: app.globalData.windowWidth,
    windowHeight: app.globalData.windowHeight
  },
  // 事件处理函数一定是没有参数
  changeValue(e) {
    var k = e.target.dataset.k;
    var v = e.detail.value;
    this.setData({
      [k]: v
    });
  },
  submitHandler() {
    // wx.request({
    //   url: '', // 仅为示例，并非真实的接口地址
    //   method: 'POST',
    //   data: {
    //     username: this.data.username,
    //     password: this.data.password
    //   },
    //   success(res) {
    //     wx.showToast({
    //       title: "成功",
    //       icon: "success"
    //     })
    //   }
    // })
    wx.navigateTo({
      url: '/pages/wo/wo'
    })
  }
})