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
        // 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，但是 redirectTo 
wx.navigateTo({
  url: '../mylist/mylist'
});
    
  }
})