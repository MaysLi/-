//app.js
App({
  onLaunch: function () {
    const self = this;
    wx.getSystemInfo({
      success(res){
        self.globalData.windowWidth = res.windowWidth;
        self.globalData.windowHeight = res.windowHeight;
      }
    })
  },
  globalData: {
    windowWidth: 0,
    windowHeight: 0
  }
})