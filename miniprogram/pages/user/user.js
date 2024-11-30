// const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    publishNum:0,
    takeNum:0,
  },

  //用户登录
  userLogin: function(e){
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync("userInfo", this.data.userInfo);
        wx.setStorageSync("hasUserInfo", this.data.hasUserInfo);
        // wx.cloud.callFunction({
        //   name: "User",
        //   data: {
        //     option: 'addUser',
        //     userInfo: res.userInfo
        //   }
        // })
        // wx.navigateTo({
        //   url: '/pages/chooseSchool/index'
        // })
        this.onLoad();
      }
    })
    
  },

  //获取云数据库信息
  getData: function (res) {
    let that = this;
    wx.showLoading({
      title: '正在获取信息',
    })
    wx.cloud.callFunction({
      name: "User",
      data: {
        option: 'getNum'
      }
    }).then((res) => {
      console.log(res.result);
      that.setData({
        publishNum:res.result.marketPublish.total,
        takeNum:res.result.marketTakeOrder.total,
      })
      wx.hideLoading()
    })
  },

  // 弹窗
  pop: function(e){
      wx.showToast({
        title: '还在开发中哦~',
        icon: 'none',
        mask: true
      });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)  {
    this.setData({
      userInfo: wx.getStorageSync("userInfo"),
      hasUserInfo: wx.getStorageSync("hasUserInfo")
    })
    console.log("是否登录："+this.data.hasUserInfo)

    if(this.data.hasUserInfo==true){
      // this.getData();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    if(this.data.hasUserInfo==true){
      // this.getData();
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    
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
    // this.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.hasUserInfo==true){
      wx.cloud.callFunction({
        name: "User",
        data: {
          option: 'ifAdmin'
        }
      }).then((res) => {
        console.log(res.result)
        if(res.result==true){
          wx.redirectTo({
            url: '/pages/admin/home'
          })
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})