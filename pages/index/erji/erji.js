// pages/index/erji/erji.js


const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
      {
        usename: 'classify',
        info1: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              id: 1,
              picurl: '/images/iocn_i1.png',
              title: "连衣裙"
            },
            {
              id: 2,
              picurl: '/images/iocn_i1.png',
              title: "短外套"
            },
            {
              id: 3,
              picurl: '/images/iocn_i1.png',
              title: "蕾丝衫"
            },
            {
              id: 4,
              picurl: '/images/iocn_i1.png',
              title: "卫衣"
            },
            {
              id: 5,
              picurl: '/images/iocn_i1.png',
              title: "绒衫"
            },
            {
              id: 6,
              picurl: '/images/iocn_i1.png',
              title: "T恤"
            },
            {
              id: 7,
              picurl: '/images/iocn_i1.png',
              title: "两件套"
            },
            {
              id: 8,
              picurl: '/images/iocn_i1.png',
              title: "打底衫"
            },
            {
              id: 9,
              picurl: '/images/iocn_i1.png',
              title: "马甲"
            }
          ]
        },
        info2: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              id: 1,
              picurl: '/images/iocn_i1.png',
              title: "连衣裙"
            },
            {
              id: 2,
              picurl: '/images/iocn_i1.png',
              title: "短外套"
            },
            {
              id: 3,
              picurl: '/images/iocn_i1.png',
              title: "蕾丝衫"
            },
            {
              id: 4,
              picurl: '/images/iocn_i1.png',
              title: "卫衣"
            },
            {
              id: 5,
              picurl: '/images/iocn_i1.png',
              title: "绒衫"
            },
            {
              id: 6,
              picurl: '/images/iocn_i1.png',
              title: "T恤"
            },
            {
              id: 7,
              picurl: '/images/iocn_i1.png',
              title: "两件套"
            },
            {
              id: 8,
              picurl: '/images/iocn_i1.png',
              title: "打底衫"
            },
            {
              id: 9,
              picurl: '/images/iocn_i1.png',
              title: "马甲"
            }
          ]
        },
        info3: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              id: 1,
              picurl: '/images/iocn_i1.png',
              title: "连衣裙"
            },
            {
              id: 2,
              picurl: '/images/iocn_i1.png',
              title: "短外套"
            },
            {
              id: 3,
              picurl: '/images/iocn_i1.png',
              title: "蕾丝衫"
            },
            {
              id: 4,
              picurl: '/images/iocn_i1.png',
              title: "卫衣"
            },
            {
              id: 5,
              picurl: '/images/iocn_i1.png',
              title: "绒衫"
            },
            {
              id: 6,
              picurl: '/images/iocn_i1.png',
              title: "T恤"
            },
            {
              id: 7,
              picurl: '/images/iocn_i1.png',
              title: "两件套"
            },
            {
              id: 8,
              picurl: '/images/iocn_i1.png',
              title: "打底衫"
            },
            {
              id: 9,
              picurl: '/images/iocn_i1.png',
              title: "马甲"
            }
          ]
        }
      }
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