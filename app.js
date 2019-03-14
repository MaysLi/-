//app.js
App({
  onLaunch: function () {
    const self = this;
    wx.getSystemInfo({
      success(res){
        self.globalData.windowWidth = res.windowWidth;
      }
    })
  },
  globalData: {
    windowWidth: 0
  }
})