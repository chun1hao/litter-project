//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    idx:0,
    hidden:true,
    hidden1:true,
    isshow:true,
    scrollTop : 0,
    userInfo: {},
    nav:["最新","最嗨","最美"],
    liveData:[],
    lifeData:[],
    bgData:[],
    hasMore:true,
    hasRefesh:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    var _this =this;
    this.fetchList()
    setTimeout(function(){
      _this.setData({
        isshow:false
      })
    },1000)
  },
  tap(e){
    this.setData({
      idx:e.target.dataset.num
    })
  },
  change(e){
    this.setData({
      idx:e.detail.current
    })
  },
   fetchList(){
      var _this=this;
      wx.request({
        url: app.globalData.globalUrl + '/api/list',
        data: {},
        method:"GET",
        success: function(res) {
          //console.log(res)
          _this.setData({
            liveData:res.data.liveData,
            lifeData:res.data.lifeData,
            bgData:res.data.bgData
          })
        }
      })
   },
   change2(){
     wx.navigateTo({
       url: '../discovery/discovery'
    })
   },
   change3(){
     wx.navigateTo({
       url: '../mine/mine'
    })
   },
   change4(){
     wx.navigateTo({
       url: '../focus/focus'
    })
   },
   //加载更多
  loadMore: function(e) {
    if(this.data.hidden){
      var _this = this;
      _this.setData({
        hasRefesh:true,
      });
      wx.request({
        url: app.globalData.globalUrl + '/api/list',
        data: {},
        method:"GET",
        success: function(res) {
         //console.log(res)
        var liveData=_this.data.liveData,
            lifeData=_this.data.lifeData,
             bgData=_this.data.bgData
        for(var i=0;i<res.data.liveData.length; i++){
                 liveData.push(res.data.liveData[i]);
             }
             //console.log(liveData)
          _this.setData({
            liveData:liveData,
            // lifeData:lifeData,
            // bgData:bgData,
            hasMore:false,
            hidden:false
          })
        }
      })
    }
    // setTimeout(function(){
    //   this.setData({
    //     hidden:true
    //   })
    // },3000)   
  },
  //刷新
  refesh: function(e) {
    var _this = this;
    _this.setData({
        hasRefesh:true,
    });
    setTimeout(function(){
      _this.setData({
        hasRefesh:false,
      })
    },3000)
  }
})
