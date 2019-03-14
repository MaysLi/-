//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    item: [
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
      {
        usename: "screen",
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
      }
    ]
  },
  gotolink(e){
    // console.log(e.target.dataset.link);
    const link = e.target.dataset.link;
    wx.navigateTo({
      url: link
    })
  }
})
