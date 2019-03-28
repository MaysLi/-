// pages/index/shops/shops.js


const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    windowWidth: app.globalData.windowWidth,
    windowHeight: app.globalData.windowHeight,
    item1: {
      title: 'BT独行少女',
      number: '75.2万',
      follow: '已关注',
      arr1: {
        id: 1,
        title: '首页'
      },
      arr2: {
        id: 2,
        title: '宝贝'
      },
      arr3: {
        id: 3,
        title: '新品'
      },
      arr4: {
        id: 4,
        title: '活动'
      }
    },
    item2: {
      picurl: '/images/iocn_i1.png',
      arr: [
        {
          pic: '/images/iocn_bb.png',
          title: '全部宝贝'
        },
        {
          pic: '/images/iocn_wt.png',
          title: '店铺微淘'
        },
        {
          pic: '/images/iocn_fl.png',
          title: '商品分类'
        },
        {
          pic: '/images/iocn_kf.png',
          title: '联系客服'
        }
      ]
    },
    info: {
      usename: 'show',
      arr1: [
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 136,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        }
      ],
      arr2: [
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 136,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 68,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        }
      ],
      arr3: [
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 136,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        }
      ],
      arr4: [
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 136,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        },
        {
          windowWidth: app.globalData.windowWidth,
          txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～",
          picurl: "/images/img1.png",
          number: 99,
          link: "/pages/index/erji/erji"
        }
      ]
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(param) {
  },

  changenav(e){
    console.log(e.target.dataset.id);
    var v = e.target.dataset.id;
    this.setData({
      id: v
    })
  }

})