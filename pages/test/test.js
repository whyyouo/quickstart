// pages/test/test.js
Page({
  data:{
    array: [1, 2, 3, 4, 5],
    view: 'WEBVIEW',
    item_id_0: 0,
    item_id_1: 1,
    checkedtype:true,
    a: 1,
    b: 2,
    c: 3,
    object: {
      key: 'Hello '
    },
    array: ['MINA','mina'],
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },
    value:'不是村支书',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
  ,oneTest:function(e){
    console.log("one---> "+e.target.id);
  },
  twoTest:function(e){
   console.log("two---> "+e.target.id);
  },
  loginForm: function(data) {
    console.log(data.detail.value)//  {username: "hgj", password: "fsdfsd"}
    var username = data.detail.value.username
    var password = data.detail.value.password;
}
})