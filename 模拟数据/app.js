var  express = require("express")  

var app = express();

app.get('/api/list',function(req,res){
	res.json({"code":0,liveData:[{
      url:"../../img/t4.jpg",
      info:"今天是个好日子",
      peo:"84656"
    },
    {
      url:"../../img/tt2.jpg",
      info:"明天的你是...",
      peo:"64645"
    },
    {
      url:"../../img/tt3.jpg",
      info:"今天是个好日子",
      peo:"55616"
    },
    {
      url:"../../img/tt5.jpg",
      info:"明天的你是...",
      peo:"46612"
    },
    {
      url:"../../img/t4.jpg",
      info:"今天是个好日子",
      peo:"33316"
    },
    {
      url:"../../img/tt2.jpg",
      info:"明天的你是...",
      peo:"33129"
    },
    {
      url:"../../img/tt3.jpg",
      info:"今天是个好日子",
      peo:"21212"
    }
    ],lifeData:[{
      url:"../../img/t5.jpg",
      info:"大家一起嗨起来",
      peo:"84656"
    },
    {
      url:"../../img/t6.jpg",
      info:"我谁都不服...",
      peo:"78456"
    },
    {
      url:"../../img/t6.jpg",
      info:"大家一起嗨起来",
      peo:"64613"
    },
    {
      url:"../../img/t5.jpg",
      info:"我谁都不服...",
      peo:"54512"
    },
    {
      url:"../../img/t1.jpg",
      info:"大家一起嗨起来",
      peo:"41321"
    },
    {
      url:"../../img/t5.jpg",
      info:"我谁都不服...",
      peo:"31515"
    },
    {
      url:"../../img/t6.jpg",
      info:"大家一起嗨起来",
      peo:"21515"
    }
    ],bgData:[{
      url:"../../img/t1.jpg",
      info:"小姐姐又来了",
      peo:"84656"
    },
    {
      url:"../../img/t2.jpg",
      info:"今天，应该...",
      peo:"71522"
    },
    {
      url:"../../img/t3.jpg",
      info:"今天玩会游戏",
      peo:"65156"
    },
    {
      url:"../../img/t1.jpg",
      info:"小姐姐又来了",
      peo:"84656"
    },
    {
      url:"../../img/t2.jpg",
      info:"今天，应该...",
      peo:"71522"
    },
    {
      url:"../../img/t3.jpg",
      info:"今天玩会游戏",
      peo:"65156"
    },
    {
      url:"../../img/t2.jpg",
      info:"今天，应该...",
      peo:"71522"
    }
    ]})
})

app.listen("8090",function(){
	console.log("链接成功")
})

var loadMore = function(that){
     that.setData({
         hidden:false
     });
     wx.request({
         url:url,
         data:{
             page : page,
             page_size : page_size,
             sort : sort,
             is_easy : is_easy,
             lange_id : lange_id,
             pos_id : pos_id,
             unlearn : unlearn
         },
         success:function(res){
             //console.info(that.data.list);
             var list = that.data.list;
             for(var i = 0; i < res.data.list.length; i++){
                 list.push(res.data.list[i]);
             }
             that.setData({
                 list : list
             });
             page ++;
             that.setData({
                 hidden:true
             });

      }     
    });
 }