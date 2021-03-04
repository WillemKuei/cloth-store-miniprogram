//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    adList: [{
      imgUrl: 'http://res.yi-gather.com/s/invoice5b22288c365070fb3fac8dc6fea6208f9d478a29eb47f204c3a02106ba2d827f.png?h=Fl4k9ZO7rckg7MCLIYhL3JhkswSj',
      linkUrl: 'https://linker.yitopia.co/'
    }, {
        imgUrl: 'http://res.yi-gather.com/s/invoice27f62fb43f4ed033b6da778f0d580e8a245f45400e83510ee0466f4b1e1b59a6.jpeg?h=Fspx_h72dak5eI5B-axn4dhflVKK',
        linkUrl: 'https://linker.yitopia.co/'
    }, {
        imgUrl: 'http://res.yi-gather.com/s/invoicecd5ff0bd0a11f04821a67970b41f6bcb982ffb67b8f391a9f90ede3aeab90522.jpeg?h=Fnna0ggUBWmwiwp2tScWjs33EiiT',
        linkUrl: 'https://linker.yitopia.co/'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
