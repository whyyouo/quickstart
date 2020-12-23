Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id: 1,
      name: '芒果',
      content: "我是张三，见到大家很高兴。。。",
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F06imgmini.eastday.com%2Fmobile%2F20180927%2F20180927195306_f090123300da92060f19de2b2d7582a9_1.jpeg&refer=http%3A%2F%2F06imgmini.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611298860&t=262affe41699da01cd2ffdefe20cceb8"
    }, {
      id: 2,
      name: '香蕉',
      content: "我是李四，可以带大将去玩。。。。",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1833894310,3896858455&fm=26&gp=0.jpg"
    },{
        id: 3,
        name: '苹果',
        content: "我是王五，我编码贼好。。。。",
        img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=139847829,1203538536&fm=26&gp=0.jpg"
      }]
  },
  onItemClick:function(datas){
   console.log("点击-->",datas.currentTarget.id);
   console.log("点击-->",datas.currentTarget.name);
  },
})