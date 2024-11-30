const app = getApp()

Page({
  data: {
    polyline: [{
      points: [],
      color:"#F88B98",
      width: 6,
      arrowLine: true,
      borderWidth: 1 //线的边框宽度，还有很多参数，请看文档 
    }]
  },
  click() {
    this.setData({
      polyline: [{
        points: [{
            latitude: "23.298446",
            longitude: "112.973573"
          },
          {
            latitude: "23.263232",
            longitude: "112.984954"
          },
          {
            latitude: "23.253232",
            longitude: "113.014954"
          },
          {
            latitude: "23.193212",
            longitude: "113.052782"
          },
          {
            latitude: "23.103425",
            longitude: "113.097424"
          },
          {
            latitude: "23.093212",
            longitude: "113.152234"
          },
          {
            latitude: "22.823452",
            longitude: "113.252454"
          },
          {
            latitude: "22.803252",
            longitude: "113.452324"
          },
          {
            latitude: "22.7732312",
            longitude: "113.652454"
          },
          {
            latitude: "22.732742",
            longitude: "113.816564"
          },
          {
            latitude: "22.632742",
            longitude: "113.846564"
          },
          {
            latitude: "22.592742",
            longitude: "113.886564"
          },
          {
            latitude: "22.562742",
            longitude: "113.906564"
          },
          {
            latitude: "22.552742",
            longitude: "113.916564"
          },
          {
            latitude: "22.542742",
            longitude: "113.926564"
          },
          {
            latitude: "22.532742",
            longitude: "113.926696"
          },
          {
            latitude: "22.533742",
            longitude: "113.928696"
          },
          {
            latitude: "22.532742",
            longitude: "113.930696"
          },
          {
            latitude: "22.533782",
            longitude: "113.933696"
          },
          {
            latitude: "22.533482",
            longitude: "113.934636"
          },
          {
            latitude: "22.533282",
            longitude: "113.935636"
          },
          {
            latitude: "22.532482",
            longitude: "113.936036"
          },
          {
            latitude: "22.532742",
            longitude: "113.936696"
          }
        ],
        color: "#F88B98",
        width: 6,
        arrowLine: true,
        borderWidth: 1 //线的边框宽度，还有很多参数，请看文档 
      }]
    })
  },
  onLoad() {
    this.click()
  },
 
})