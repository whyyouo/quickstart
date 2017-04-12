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
    id12: "*",
    id13: "1",
    id14: "2",
    id15: "3",
    id16: "÷",
    id17: "0",
    id18: ".",
    id19: "历史",
    id20: "=",
    equalData: "0",
    lastIsOper: false
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
  clickView: function (event) {
    console.log(event);
    console.log(event.target.id);
    var id = event.target.id;
    var tempData = event.target.id;
    var sd = this.data.equalData;
    if (id == this.data.id1) {//退格处理
      if (sd == 0) {
        return;
      }
      sd = sd.substring(0, sd.length - 1);
      if (sd == "" || sd == "-") {
        tempData = 0;
      } else {
        tempData = sd;
      }
    } else if (id == this.data.id2) {//清空处理
      tempData = 0;
    } else if (id == this.data.id3) {//+/- 正负切换
      console.log("sd---> " + sd);
      if (sd == 0) {
        return;
      }
      var firstWord = sd.substring(0, 1);
      console.log("firstWord---> " + firstWord);
      console.log("sd.length---> " + sd.length);
      if (firstWord == "-") {
        sd = sd.substring(1, sd.length);
      } else {
        sd = "-" + sd;
      }
      tempData = sd;
    } else if (id == this.data.id19) {//历史
      // wx.navigateTo({
      //   url: '../logs/logs',
      //   success: function (res) {
      //     // success
      //     console.log(" success "+res);
      //   },
      //   fail: function (res) {
      //     // fail
      //     console.log("fail  "+res.target);
      //   },
      //   complete: function (res) {
      //     // complete
      //     console.log("complete "+res);
      //   }
      // })
      tempData = 0;
      this.setData({ equalData: tempData });
    }
    // else if (tempData == this.data.id20) {//=

    // }
    else {
      //判断最有一个字符是不是操作符号
      if (id == this.data.id4 ||
        id == this.data.id8 ||
        id == this.data.id12 ||
        id == this.data.id16) {
        if (this.data.lastIsOper == true || sd == 0) {
          return;
        }
      }
      //输入追加处理
      if (sd == 0) {
        tempData = tempData;
      } else {
        tempData = sd + tempData;
      }
    }
    this.setData({ equalData: tempData });

    //如果最后一个是操作字符，下一个不追加
    if (id == this.data.id4 ||
      id == this.data.id8 ||
      id == this.data.id12 ||
      id == this.data.id16) {
      this.setData({ lastIsOper: true });
    } else {
      this.setData({ lastIsOper: false });
    }
  }
})
