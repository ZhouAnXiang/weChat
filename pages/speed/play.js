// // play 
var app = getApp()
Page({
  data: {
   
  },
  onLoad: function(){
      var that = this;
      // 设置title
      wx.setNavigationBarTitle({
        title: that.data.typeName
      });
  },
})