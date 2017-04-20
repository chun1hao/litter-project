var  express = require("express")  

var app = express();

app.get('/api/list',function(req,res){
	res.json({"code":0,liveData:[{
      url:"../../img/t1.jpg",
      info:"今天是个好日子"
    },
    {
      url:"../../img/t2.jpg",
      info:"明天的你是..."
    },
    {
      url:"../../img/t1.jpg",
      info:"今天是个好日子"
    },
    {
      url:"../../img/t2.jpg",
      info:"明天的你是..."
    },
    {
      url:"../../img/t1.jpg",
      info:"今天是个好日子"
    },
    {
      url:"../../img/t2.jpg",
      info:"明天的你是..."
    },
    {
      url:"../../img/t1.jpg",
      info:"今天是个好日子"
    }
    ],lifeData:[{
      url:"../../img/t5.jpg",
      info:"大家一起嗨起来"
    },
    {
      url:"../../img/t6.jpg",
      info:"恕我直言，我谁都不服..."
    },
    {
      url:"../../img/t6.jpg",
      info:"大家一起嗨起来"
    },
    {
      url:"../../img/t5.jpg",
      info:"恕我直言，我谁都不服..."
    },
    {
      url:"../../img/t1.jpg",
      info:"大家一起嗨起来"
    },
    {
      url:"../../img/t5.jpg",
      info:"恕我直言，我谁都不服..."
    },
    {
      url:"../../img/t6.jpg",
      info:"大家一起嗨起来"
    }
    ],bgData:[{
      url:"../../img/t3.jpg",
      info:"美女啊美女"
    },
    {
      url:"../../img/t4.jpg",
      info:"今天，是不是应该..."
    },
    {
      url:"../../img/t3.jpg",
      info:"美女啊美女"
    },
    {
      url:"../../img/t4.jpg",
      info:"今天，是不是应该..."
    },
    {
      url:"../../img/t3.jpg",
      info:"美女啊美女"
    },
    {
      url:"../../img/t4.jpg",
      info:"今天，是不是应该..."
    },
    {
      url:"../../img/t3.jpg",
      info:"美女啊美女"
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