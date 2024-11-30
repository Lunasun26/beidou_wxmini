// pages/message/message.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    animal:'',
    chooseImgs: '', 
  },

  changeName:function(e){
    // 当触发changeName的时候给name赋值
    this.setData({
      name:e.detail.value
    })
  },
  
  changeTel:function(e){
    // 当触发changeTel的时候给tel赋值
    this.setData({
      tel:e.detail.value
    })
  },

  changeSex:function(e){
    // 当触发changeSex的时候给sex赋值
    this.setData({
      sex:e.detail.value
    })
  },

  // 向后台提交完善后的数据
  bindSubmit:function(){
    wx.switchTab({
      url: '/pages/index/index',
      })

    // 判断用户输入是否为空
    if(!this.data.name){
      this.openAlert('姓名不能为空')
      return
    } else  if(!this.data.tel){
      this.openAlert('手机号不能为空')
      return
    } else  if(!this.data.sex){
      this.openAlert('性别不能为空')
      return
    }
  },

binSubmit:function(){

    //检查数据是否必填
    const {
      title,
      time,
      chooseImgs
    } = this.data;
  
    if (!time ||!title || chooseImgs.length==0) {
      wx.showToast({
        title: '信息填写不完整',
        icon: 'none',
        mask: true
      });
      return;
    }
    this.setData({ 
      show: true
    })

},


// 选择封面图片
handleChooseImg() {
  let that = this;
  if (this.data.chooseImgs.length < 1) {
    // 调用小程序内置的选择图片api 
    wx.chooseImage({
      count: 1 - that.data.chooseImgs.length,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          chooseImgs: [...this.data.chooseImgs, ...res.tempFilePaths]
        })
        // that.uploadImg();
      }
    })
  } else {
    wx.showToast({ //超过照片数限制提示 
      title: '最多上传1张图片',
      icon: "none",
      duration: 2000
    })
  }
},

// 删除封面图片
handleRemoveImg(e) {
  const {
    index
  } = e.currentTarget.dataset;
  let {
    chooseImgs
  } = this.data;
  chooseImgs.splice(index, 1);
  this.setData({
    chooseImgs
  })
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