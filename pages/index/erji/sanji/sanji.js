// pages/index/erji/sanji/sanji.js


const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    item: [
      {
        usename: 'details',
        info: {
          windowWidth: app.globalData.windowWidth,
          windowHeight: app.globalData.windowHeight,
          arr: [
            {
              _id: 1,
              picurl: '/images/img1.png',
              title: '仙女高跟鞋凉鞋 · 夏季真皮罗马凉鞋女 仙女风粗跟高跟鞋露趾休闲鞋 黑色',
              brand: '品牌来自巴西',
              e_brand: ' Luiza Barcelos',
              price: '￥248',
              o_price: '￥598',
              discount: '4.1折',
              free: '包邮',
              details: [
                {
                  title: '新人：领取新人署劵大礼包，一单最高可省25元',
                  picurl: '/images/iocn_right.png'
                },
                {
                  title: '署劵：满199减10 满299减20 满399减40',
                  picurl: '/images/iocn_right.png'
                }
              ],
              introduce: [
                {
                  title: '已选： 黑色 37',
                  picurl: '/images/iocn_right.png',
                  in_tit: 'Luiza Barcelos是新加坡本土的鞋履品牌，诞生于1986年，今年来已经成功跻身当今高档鞋履品牌的名单，成为当前市场主要的流行的鞋履品牌之一。Luiza Barcelos以石头作为主要元素，传达了品牌健康舒适的理念',
                  picimg: '/images/iocn_i1.png',
                  tit1: 'Luiza Barcelos品牌店',
                  tit2: '在售商品17313件',
                  t_more: '进店逛逛',
                  piciocn: '/images/iocn_right.png'
                }
              ],
              _arr: [
                {
                  pic: '/images/iocn_kf.png',
                  tit: '客服'
                },
                {
                  pic: '/images/iocn_dp.png',
                  tit: '店铺'
                },
                {
                  pic: '/images/iocn_gwc.png',
                  tit: '购物车'
                }
              ]
            }
          ]
        }
      }
    ]
  },
  onLoad(param) {
    this.setData({
      id: param.id
    })
  },

  // 商铺
  shops(e) {
    wx.navigateTo({
      url: "/pages/index/shops/shops"
    })
  }

})