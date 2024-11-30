
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    userInfo: {},
    listdata:[],
    id:"",
  },

//显示输入
showInput: function () {
  this.setData({
    inputShowed: true
  });
 },

//隐藏输入
 hideInput: function () {
  this.setData({
    inputVal: "",
    inputShowed: false
 });
 // getList(this);
 },

//清楚输入
 clearInput: function () {
  this.setData({
   inputVal: ""
  });
  // getList(this);
  },

//输入内容
 inputTyping: function (e) {
  this.setData({
    inputVal: e.detail.value
  });
 },

//在数据库搜索
 searchData: function(e){
  // var school = wx.getStorageSync("chooseSchool")
  // this.setData({listdata: []})
  // var that = this;

  // wx.showLoading({
  //   title: '搜索中',
  // })
  //  wx.cloud.callFunction({
  //   name: "market",
  //   data: {
  //     inputVal: that.data.inputVal,
  //     option: 'search',
  //     school: school
  //   }
  // }).then((res) => {
  //     if(res.result.data.length==0){
  //       that.setData({
  //         none: '未搜索到相关任务'
  //       })
  //     }else{
  //       that.setData({
  //         none: ''
  //       })
  //     }
  //     res.result.data.map((val, index)=>{
  //       val.startTimestamp =  date.dateStr(new Date(parseInt(val.startTimestamp)))
  //       val.money = common.toDecimal2(val.money)
  //       return val
  //     })
  //     that.setData({
  //       listdata: res.result.data,
  //     })

  //     wx.stopPullDownRefresh()
  //     wx.hideLoading()
  //     getApp().globalData.rwq_refresh = false
  // }).catch((err) => {
  //     wx.hideLoading()
  //     that.setData({
  //       none: '未搜索到相关任务'
  //     })
  // })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})