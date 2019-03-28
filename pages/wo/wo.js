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
    popup1: false,
    popup2: false,
    portrait: '/images/iocn_i1.png',
    follow: '1',
    fans: '5',
    fabulous: '21',
    describe: '添加个人描述，可让大家更好地认识你',
    item1: [
      {
        picurl: '/images/iocn_tianjia.png',
        iright: '/images/iocn_right.png',
        title: '发现好友'
      },
      {
        picurl: '/images/iocn_caogao.png',
        iright: '/images/iocn_right.png',
        title: '我的草稿'
      }
    ],
    item2: [
      {
        picurl: '/images/iocn_gouwuche.png',
        iright: '/images/iocn_right.png',
        title: '购物车'
      },
      {
        picurl: '/images/iocn_dingdan.png',
        iright: '/images/iocn_right.png',
        title: '订单'
      },
      {
        picurl: '/images/iocn_shuquan.png',
        iright: '/images/iocn_right.png',
        title: '薯券'
      },
      {
        picurl: '/images/iocn_xinyuan.png',
        iright: '/images/iocn_right.png',
        title: '心愿单'
      },
      {
        picurl: '/images/iocn_hiuyuan.png',
        iright: '/images/iocn_right.png',
        title: '衣号店会员'
      }
    ],
    item3: [
      {
        picurl: '/images/iocn_liuliang.png',
        iright: '/images/iocn_right.png',
        title: '免流量'
      },
      {
        picurl: '/images/iocn_qianbao.png',
        iright: '/images/iocn_right.png',
        title: '我的钱包'
      },
      {
        picurl: '/images/iocn_bangzhu.png',
        iright: '/images/iocn_right.png',
        title: '帮助与客服'
      },
      {
        picurl: '/images/iocn_sao.png',
        iright: '/images/iocn_right.png',
        title: '扫一扫'
      }
    ],
    setnav1: [
      '个人资料', '账号与安全', '申请认证'
    ],
    setnav2: [
      '新消息通知', '隐私', '通用'
    ],
    setnav3: [
      '鼓励一下', '关于衣号店', '意见反馈'
    ],
    switch_id: 0,
    usename: 'card',
    _arr1: {
      lb_id: 0,
      num: 0,
      title: '笔记',
    },
    _arr2: {
      lb_id: 1,
      num: 0,
      title: '收藏',
    },
    _arr3: {
      lb_id: 2,
      num: 0,
      title: '赞过',
    },
    arr1: [
      {
        windowWidth: app.globalData.windowWidth,
        collection: 136,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      },
      {
        windowWidth: app.globalData.windowWidth,
        collection: 155,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      },
      {
        windowWidth: app.globalData.windowWidth,
        collection: 256,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      }
    ],
    arr2: [
      {
        windowWidth: app.globalData.windowWidth,
        collection: 136,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      }
    ],
    arr3: [
      {
        windowWidth: app.globalData.windowWidth,
        collection: 136,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      },
      {
        windowWidth: app.globalData.windowWidth,
        collection: 155,
        picurl: "/images/img1.png",
        picurl2: "/images/img1.png",
        picurl3: "/images/iocn_xq1.png",
        link: "/pages/index/erji/erji",
        txt: "🇰🇷韩国首尔七天自由行超强性价比攻略#出行篇✈️ 这次整个旅程都非常的顺利～"
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 计算笔记 收藏 点赞个数
    // for(let i=0; i<this.data.arr.length; i++){
    //   var num = this.data.arr[i].num;
    //   console.log(num);
    //   this.setData({
    //     num: 
    //   })
    // }
    
  },

  // 打开弹出层1
  openmenu(){
    this.setData({
      popup1: true
    })
  },
  //关闭弹出层1
  closemenu(){
    this.setData({
      popup1: false
    })
  },
  // 打开弹出层2
  getset() {
    this.setData({
      popup2: true
    })
  },
  //关闭弹出层2
  closegetset() {
    this.setData({
      popup2: false
    })
  },
  // 卡片
  setswitch(e){
    console.log(e.target.dataset.id);
    var v = e.target.dataset.id;
    this.setData({
      switch_id: v
    })
  }
})