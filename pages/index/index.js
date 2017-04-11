//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //text:"这是第一个页面"
    id1: "退格",
    id2: "清空",
    id3: "+/-",
    id4: "+",
    id5: "7",
    id6: "8",
    id7: "9",
    id8: "-",
    id9: "4",
    id10: "5",
    id11: "6",
    id12: "X",
    id13: "1",
    id14: "2",
    id15: "3",
    id16: "/",
    id17: "0",
    id18: ".",
    id19: "历史",
    id20: "=",
    equalData: "0"
  },
  //初始化数据加载
   onLoad: function () {
    //初始化数据     
    console.log("index.js-->onLoad: function(1)");
  },
    onShow: function () {
    //页面显示
    console.log("index.js-->onShow: function(1)");
  },
  onReady: function () {
    //页面渲染(加载)完成
    console.log("index.js-->onReady: function(1)");
  },
  onHide: function () {
    //页面隐藏
    console.log("index.js-->onHide: function(1)");
  },
  onUnload: function () {
    //页面关闭
    console.log("index.js-->onUnload: function(1)");
  },
  //*******点击事件部分*******
  clickBtn: function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
  },
  cleanBtn: function (event) {
    console.log(event.target.id);
  },
  plusOrReduceBtn: function (event) {
    console.log(event.target.id);
  },
  plusBtn: function (event) {
    console.log(event.target.id);
  },
  reduceBtn: function (event) {
    console.log(event.target.id);
  },
  multiplyBtn: function (event) {
    console.log(event.target.id);
  },
  divideBtn: function (event) {
    console.log(event.target.id);
  },
  equalBtn: function (event) {
    console.log(event.target.id);
  },
  soptBtn: function (event) {
    console.log(event.target.id);
  },
  //历史
  historyBtn: function (event) {
    console.log(event.target.id);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  zeroBtn: function (event) {
    console.log(event.target.id);
  },
  oneBtn: function (event) {
    console.log(event.target.id);
  },
  twoBtn: function (event) {
    console.log(event.target.id);
  },
  threeBtn: function (event) {
    console.log(event.target.id);
  },
  fourBtn: function (event) {
    console.log(event.target.id);
  },
  fiveBtn: function (event) {
    console.log(event.target.id);
  },
  sexBtn: function (event) {
    console.log(event.target.id);
  },
  sevenBtn: function (event) {
    console.log(event.target.id);
  },
  eightBtn: function (event) {
    console.log(event.target.id);
  },
  nightBtn: function (event) {
    console.log(event.target.id);
  }
})
