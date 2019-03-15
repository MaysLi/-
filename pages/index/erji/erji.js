// pages/index/erji/erji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { "id": 1, "name": "er级页1" },
      { "id": 2, "name": "er级页2" },
      { "id": 3, "name": "er级页3" },
      { "id": 4, "name": "er级页4" },
      { "id": 5, "name": "er级页5" }
    ]
  },
  gotosanji(e){
      console.log(e.target.dataset.id);
      var id = e.target.dataset.id
      wx.navigateTo({
        url: '/pages/index/erji/sanji/sanji?id=' + id
      })
  }
})