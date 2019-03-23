// pages/liaotian/liaotian.js

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */

  data: {
    tit:[
      {
        title: '物流信息',
        link: '/pages/liaotian/xinxi/xinxi'
      },
      {
        title: '通知信息',
        link: '/pages/liaotian/xinxi/xinxi'
      },
      {
        title: '互动信息',
        link: '/pages/liaotian/xinxi/xinxi'
      }
    ],
    windowWidth: app.globalData.windowWidth,
    arr: [
      {
        title: '狐狸小屋',
        titleSize: '亲！狐狸小屋毫无推荐呦',
        picurl: '/images/img1.png',
        timer: '今天',
        link: ''
      },
      {
        title: 'VeroModa',
        titleSize: '恕我直言，江疏影的多元魅力太圈粉！',
        picurl: '/images/img1.png',
        timer: '昨天',
        link: ''
      },
      {
        title: 'TB独行少女',
        titleSize: '想把整个春天都寄给你',
        picurl: '/images/img1.png',
        timer: '昨天',
        link: ''
      }
    ]
  },

  todoxinxi(e){
    console.log(e.target.dataset.url);
    var pic = e.target.dataset.url;
    wx.navigateTo({
      url: pic,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})