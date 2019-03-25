//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    windowWidth: app.globalData.windowWidth,
    item: [
      //轮播
      {
        usename: "msgItem",
        info: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            },
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            },
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            },
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            }
          ]
        }
      },
      // 分类 筛选
      {
        usename: "iocn_ls",
        info: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "女装"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "上衣"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "裤子"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "裙子"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "套装"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "女鞋"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "美妆/个护"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "包包"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "配饰"
            },
            {
              picurl: "/images/iocn_i1.png",
              link: "/pages/index/erji/erji",
              txt: "男友"
            }
          ]
        }
      },
      //展示
      {
        usename: "grid",
        info: {
          windowWidth: app.globalData.windowWidth,
          arr: [
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            },
            {
              picurl: "/images/img1.png",
              link: "/pages/index/erji/erji"
            }
          ]
        }
      },
      //推荐
      {
        usename: "screen",
        info: {
          windowWidth: app.globalData.windowWidth,
          // arr: ["推荐1", "推荐2", "推荐3"],
          arr: [
            {
              id: 1,
              collection: 123,
              picurl: "/images/img1.png", 
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 2,
              collection: 23,
              picurl: "/images/img1.png", 
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 3,
              collection: 53,
              picurl: "/images/img1.png",
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 4,
              collection: 283,
              picurl: "/images/img1.png",
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 5,
              collection: 156,
              picurl: "/images/img1.png",
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 6,
              collection: 258,
              picurl: "/images/img1.png",
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            },
            {
              id: 7,
              collection: 18,
              picurl: "/images/img1.png",
              picur2: "/images/img1.png",
              picur3: "/images/iocn_xq1.png",
              link: "/pages/index/erji/sanji/sanji?id=",
              txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
            }
          ]
        }
      }
    ]
  },

  // 换页
  gotolink(e){
    // console.log(e.target.dataset.link);
    const link = e.target.dataset.link;
    wx.navigateTo({
      url: link
    })
  },

  // 切换导航
  // getnav(e) {
  //   console.log(e.target);
  //   wx.navigateTo({
  //     url: "/pages/index/more/more"
  //   })
  // },

  // 更多商品
  more(e){
    // console.log(e.target.dataset.link);
    wx.navigateTo({
      url: "/pages/index/more/more"
    })
  },

  //去三级详情页
  gotosanji(e){
    console.log(e.target.dataset.id);
    console.log(e.target.dataset.link);
    var id = e.target.dataset.id;
    var link = e.target.dataset.link;
    wx.navigateTo({
      url: link + id
    })
  },

  // 收藏
  addnumber(e){
    // console.log(e.target.dataset.url);
    // console.log(e.target);
    // // url = e.target.dataset.url;
    // this.setData({
    //   this.data.
    // });
  },

  // 商铺
  shops(e){
    wx.navigateTo({
      url: "/pages/index/shops/shops"
    })
  }
})
