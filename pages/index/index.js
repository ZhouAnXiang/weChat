// var utils = require('../template/header/header.js')
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    // 图片
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    srcWaima: '../../../resources/common/icon-waima.jpg',
    srcSo: '../../../resources/common/icon-so.jpg',
    srcList: '../../../resources/common/icon-list.jpg',
    srcUser: '../../../resources/common/icon-user.jpg',
    search: '../../../resources/common/search.png',
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  clickDetail: function () {
    wx.navigateTo({
      url: '../end/end'
    })
  },
  clickEndless: function () {
    wx.navigateTo({
      url: '../endless/play'
    })
  },
  clickTime: function () {
    wx.navigateTo({
      url: '../time/play'
    })
  },
  clickLogo: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
})
