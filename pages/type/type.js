// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [{text: '好货推荐', id: 1},
      {text: '女装', id: 2},
      {text: '男装', id: 3},
      {text: '彩妆个护', id: 4},
      {text: '食品饮料', id: 5},
      {text: '鞋履箱包', id: 6},
      {text: '母婴用品', id: 7},
      {text: '生活家居', id: 8},
      {text: '厨房餐具', id: 9}
    ],
    productList: [{img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 245},
    {img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 245},
    {img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 245},
    {img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 245},
    {img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 245},
    {img_url: '../../images/source/s3.jpg', title: '吉普男士抓绒外套秋冬款加厚保暖抓绒衣衣', price: 345, sell_count: 2425}
    ],
    selectType: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 自定义Function
   */
  changeType(event) {
    let typeId = parseInt(event.target.id)
    this.setData({
      selectType: typeId
    })
  }
})