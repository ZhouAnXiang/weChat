// pages/template/header/header.js
Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    search: '../../../resources/common/search.png',
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  clickLogoFoot: function () {
    wx.navigateTo({
      url: '../header/header',
    })
  }
})