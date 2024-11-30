Page({

  /**
   * 页面的初始数据
   */
  data: {
    datanum1:24,
    datanum2:31,
    chartData: {},
    opts: {
        color: ["#F88B98"],
        padding: [15,15,0,5],
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          data: [
            {
              min: 21
            }
          ]
        },
        extra: {
          column: {
            type: "group",
            width: 25,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            linearType: "custom",
            seriesGap: 2,
            linearOpacity: 0.5,
            barBorderCircle: true,
            customColor: [
              "#F88B79"
            ]
          }
        }
      },
      chartData1: {},
      opts1: {
          color: ["#F88B98"],
          padding: [15,15,0,15],
          legend: {},
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            data: [
              {
                min: 27
              }],
            gridType: "dash",
            dashLength: 2
          },
          extra: {
            area: {
              type: "step",
              opacity: 0.2,
              addLine: true,
              width: 2,
              gradient: true
            }
          }
        },
        
  },
  getServerData() {
      let res = {
          categories:["10:00","10:15","10:30","10:45","11:00","11:15"],
          series: [
            {
              name: "温度(°C)",
              data: [23,23,24,25,24,24]
            }
          ]
        };
      this.setData({ chartData: JSON.parse(JSON.stringify(res)) });
  },

  getServerData1() {
      let res = {
        categories: ["10:00","10:15","10:30","10:45","11:00","11:15"],
          series: [
            {
              name: "湿度(%)",
              data: [31,30,30,31,32,31]
            }
          ]
        };
      this.setData({ chartData1: JSON.parse(JSON.stringify(res)) });
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
    this.getServerData();
    this.getServerData1();
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