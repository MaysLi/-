// pages/tiujian/tiujian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    title1: {
      id: 1,
      title: '推荐'
    },
    title2: {
      id: 2,
      title: '时尚'
    },
    title3: {
      id: 3,
      title: '美妆'
    },
    title4: {
      id: 4,
      title: '品牌'
    },
    title5: {
      id: 5,
      title: '清新'
    },
    arr1:[
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      }
    ],
    arr2: [
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      }
    ],
    arr3: [
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      }
    ],
    arr4: [
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      }
    ],
    arr5: [
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      },
      {
        picurl: '/images/img1.png',
        link: '/pages/index/more/more'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  changnav(e){
    console.log(e.target.dataset.id);
    var v = e.target.dataset.id;
    this.setData({
      id: v
    })
  }

})