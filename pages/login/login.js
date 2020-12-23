// pages/login/login.js
Page({
  data: {
    code: 'USD',
    login:'登录',
    pwd:'密码',
    array: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
  , 
  loginForm: function (data) {//登录
    var userName = data.detail.value.username;
    var userPwd = data.detail.value.password;
    console.log("userName---> " + userName);
    console.log("userPwd---> " + userPwd);
    // var that = this;
    // wx.request({
    //   url: '', //仅为示例，并非真实的接口地址https://myserver.com:8080
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data)
    //   }
    // })    
  }
})