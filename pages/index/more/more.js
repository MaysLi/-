// pages/index/more/more.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
      {
        usename: 'mores',
        windowWidth: app.globalData.windowWidth,
        arr: [
          {
            timer: '3月4日 12:12',
            picurl: '/images/img1.png',
            title: '早春没点“粉色”，怎么招桃花？',
            info: [
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              },
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              }
            ]
          },
          {
            timer: '2月28日 17:35',
            picurl: '/images/img1.png',
            title: '早春没点“粉色”，怎么招桃花？',
            info: [
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              }
            ]
          },
          {
            timer: '1月15日 10:13',
            picurl: '/images/img1.png',
            title: '早春没点“粉色”，怎么招桃花？',
            info: [
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              },
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              },
              {
                pic: '/images/img1.png',
                tit: '【西装穿四季】实力演绎什么套路都能接招'
              }
            ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})