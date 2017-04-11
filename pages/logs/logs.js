//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log("logs.js-->onLoad: function()");
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    //页面显示
    console.log("logs.js-->onShow: function()");
  },
  onReady: function () {
    //页面渲染(加载)完成
    console.log("logs.js-->onReady: function()");
  },
  onHide: function () {
    //页面隐藏
    console.log("logs.js-->onHide: function()");
  },
  onUnload: function () {
    //页面关闭
    console.log("logs.js-->onUnload: function()");
  },
})
