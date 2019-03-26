// pages/wo/wo.js


const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.globalData.windowWidth,
    windowHeight: app.globalData.windowHeight,
    name: '猪猪',
    id: 430360610,
    menupic: '/images/caidan.png',
    setpic: '/images/shezhi.png',
    popup: false,
    portrait: '/images/iocn_i1.png',
    follow: '1',
    fans: '5',
    fabulous: '21',
    describe: '添加个人描述，可让大家更好地认识你',
    item1: [
      {
        picurl: '/images/shezhi.png',
        title: '发现好友'
      },
      {
        picurl: '/images/shezhi.png',
        title: '我的草稿'
      }
    ],
    item2: [
      {
        picurl: '/images/shezhi.png',
        title: '购物车'
      },
      {
        picurl: '/images/shezhi.png',
        title: '订单'
      },
      {
        picurl: '/images/shezhi.png',
        title: '薯券'
      },
      {
        picurl: '/images/shezhi.png',
        title: '心愿单'
      },
      {
        picurl: '/images/shezhi.png',
        title: '衣号店会员'
      }
    ],
    item3: [
      {
        picurl: '/images/shezhi.png',
        title: '免流量'
      },
      {
        picurl: '/images/shezhi.png',
        title: '我的红包'
      },
      {
        picurl: '/images/shezhi.png',
        title: '帮助与客服'
      },
      {
        picurl: '/images/shezhi.png',
        title: '扫一扫'
      }
    ],
    lb_id1: 1,
    title1: '笔记',
    lb_id2: 2,
    title2: '收藏',
    lb_id3: 3,
    title3: '赞过'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 打开弹出层
  openmenu(){
    this.setData({
      popup: true
    })
  },
  //关闭弹出层
  closemenu(){
    this.setData({
      popup: false
    })
  },
  switch(e){
    console.log(e.target.dataset.id);
    var v = e.target.dataset.id
    var id = this.lb_id1
    console.log(id);
    this.setDate({
      [id]: v
    })
  }
})