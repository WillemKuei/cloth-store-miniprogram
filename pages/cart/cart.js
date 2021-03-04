// pages/cart/cart.js
const utils = require("../../utils/util")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    receiver: {
      username: '陈XX',
      phone_number: '18665003333',
      address: '广东省佛山市南海区平安大道黄花街9栋1508房'
    },
    cartList: [
      {
        img_url: '../../images/source/s2.jpg',
        text: 'HLA海澜之家双面双穿羽绒服2020冬季新品连帽净色和',
        price: 720,
        count: 1,
        number: 'J71',
        id: 1
      },
      {
        img_url: '../../images/source/s2.jpg',
        text: 'HLA海澜之家双面双穿羽绒服2020冬季新品连帽净色和',
        price: 720,
        count: 1,
        number: 'J71',
        id: 2
      }
    ],
    totalPrice: '0.00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      slideButtons: [{
        src: '/images/icons/favorite.png',
        extClass: 'handle-btn'
      }, {
        src: '/images/icons/delete.png',
        extClass: 'handle-btn'
      }]
    })
    this.caculatePrice()
  },

  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },

  minusCount(e) {
    let index = e.currentTarget.dataset.index
    this.countHandle(index, 1)
  },
  addCount(e) {
    let index = e.currentTarget.dataset.index
    this.countHandle(index, 2)
  },
  countHandle(index, type) {
    let temp = this.data.cartList
    let cart = temp[index]
    type === 1 ? cart.count-- : cart.count++
    this.setData({
      cartList: temp
    })
    this.caculatePrice()
  },
  caculatePrice() {
    let totalPrice = 0.00
    this.data.cartList.forEach(item => {
      let price = item.price * item.count
      totalPrice += price
    })
    this.setData({
      totalPrice: utils.formatMoney(totalPrice, 2, ".", ",")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})