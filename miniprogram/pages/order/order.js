// pages/orders/market/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'/pages/admin/orders/market/detail?id=',
    searchText: ' 查询订单',
    tabCur: 0, //默认选中
    typename: '全 部',
    listdata:[
      {
        code:2022010212313,
        type:'狗',
        status: '正在派箱中',
        dname: '黄阳阳',
        rname: '孙鑫鑫',
        daddress: '广东省佛山市三水区广州工商学院',
        raddress: '广东省深圳市南山区深圳大学'
      },
      {
        code:2023010325233,
        status: '正在等待揽收',
        type:'兔',
        dname: '陈莹莹',
        rname: '黄阳阳',
        daddress: '广东省深圳市南山区深圳大学',
        raddress: '广东省广州市天河区广东金融学院'
      },
      {
        code:2022030254531,
        status: '正在运输中',
        type:'狗',
        dname: '黄阳阳',
        rname: '孙鑫鑫',
        daddress: '广东省广州市花都区广州工商学院',
        raddress: '广东省佛山市三水区广州工商学院'
      },
      {
        code:2023010145345,
        status: '箱子已签收',
        type:'猫',
        dname: '孙鑫鑫',
        rname: '黄阳阳',
        daddress: '广东省广州市天河区广东工业大学',
        raddress: '广东省广州市花都区广州工商学院'
      },
      {
        code:2023022309848,
        status: '箱子已签收',
        type:'鼠',
        dname: '何磊磊',
        rname: '黄阳阳',
        daddress: '广东省佛山市三水区广东财经大学',
        raddress: '广东省深圳市南山区深圳大学'
      }
    ],
    tabs: [{
        name: '所有订单',
        id: 0
      },
      {
        name: '我寄出的',
        id: 1
      },
      {
        name: '我签收的',
        id: 2
      },
    ],
    listdata1:[
      {
        code:2022010212313,
        type:'狗',
        status: '正在等待揽收',
        dname: '黄阳阳',
        rname: '孙鑫鑫',
        daddress: '广东省佛山市三水区广州工商学院',
        raddress: '广东省深圳市南山区深圳大学'
      },
      {
        code:2022030254531,
        status: '正在运输中',
        type:'狗',
        dname: '黄阳阳',
        rname: '孙鑫鑫',
        daddress: '广东省广州市花都区广州工商学院',
        raddress: '广东省佛山市三水区广州工商学院'
      }
    ],
    listdata2:[
      {
        code:2023010325233,
        status: '正在派箱中',
        type:'兔',
        dname: '陈莹莹',
        rname: '黄阳阳',
        daddress: '广东省深圳市南山区深圳大学',
        raddress: '广东省广州市天河区广东金融学院'
      },
      {
        code:2023010145345,
        status: '箱子已签收',
        type:'猫',
        dname: '孙鑫鑫',
        rname: '黄阳阳',
        daddress: '广东省广州市天河区广东工业大学',
        raddress: '广东省广州市花都区广州工商学院'
      },
      {
        code:2023022309848,
        status: '箱子已签收',
        type:'鼠',
        dname: '何磊磊',
        rname: '黄阳阳',
        daddress: '广东省佛山市三水区广东财经大学',
        raddress: '广东省深圳市南山区深圳大学'
      }
    ]
  },

// 选择导航栏
  tabSelect: function(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 2) * 200
    })
    // this.getData();
  },

// 类别选择
 selectType: function (e) {
  this.setData({
    'type.i':e.target.dataset.i,
    typename: this.data.type.arr[e.target.dataset.i].txt
  })
  // this.getData();
},

// 跳转搜索页
toSearch: function(e){
  wx.navigateTo({
    url: '/pages/order/search/search'
  })
},

// 跳转发布页
toPublish: function(e){
  wx.navigateTo({
    url: '/pages/order/express/express'
  })

},

// 打开页面&下拉刷新 获取云数据库数据
getData: function(e){
this.setData({listdata: []})
  var school = wx.getStorageSync("chooseSchool")
  var that = this;
  var length = that.data.listdata.length;
  wx.showLoading({
    title: '正在获取列表',
  })
  wx.cloud.callFunction({
    name: "admin",
    data: {
      option: 'getListMarket',
      type: 'AD',
      listlength: length,
      tab: that.data.tabCur,
      type: that.data.typename,
      school: school
    }
  }).then((res) => {

      that.setData({
        listdata: res.result.data
      })
      console.log(res)

      wx.stopPullDownRefresh()
      wx.hideLoading()
      getApp().globalData.rwq_refresh = false
  })
},

// 触底加载列表
onloadData: function(e){
  var school = wx.getStorageSync("chooseSchool")
  var that = this;
  var length = that.data.listdata.length;

  wx.cloud.callFunction({
    name: "admin",
    data: {
      option: 'getListMarket',
      type: 'AD',
      listlength: length,
      tab: that.data.tabCur,
      type: that.data.typename,
      school: school
    }
  }).then((res) => {

      that.setData({
        listdata: [...that.data.listdata, ...res.result.data],//合并数据
        isEndOfList: res.result.data.length < 30 ? true : false //判断是否结束
      })

      wx.stopPullDownRefresh()
      wx.hideLoading()
      getApp().globalData.rwq_refresh = false
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // this.setData({listdata: []})
    // this.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // this.onloadData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})