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
    shopping: '../../../resources/common/shopping.jpg',
    // 轮播图图片
    sweetmeats: '../../../resources/img/sweetmeats.jpeg',
    supermarket: '../../../resources/img/supermarket.jpeg',
    food: '../../../resources/img/food.jpeg',
    jiancan: '../../../resources/img/jiancan.jpeg',
    new_shop: '../../../resources/img/new_shop.jpeg',
    express: '../../../resources/img/express.jpeg',
    breaker: '../../../resources/img/breaker.jpeg',
    recommend: '../../../resources/img/recommend.jpeg',
    breaker: '../../../resources/img/breaker.jpeg',
    // 列表图片
    merchant: '../../../resources/img/165f7ac1aa618221.jpg',

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
