// components/custom/store-section.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theme: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dialogShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    products: [{
      img_url: '../../images/source/s1.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 1
    }, {
      img_url: '../../images/source/s2.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 2
    }, {
      img_url: '../../images/source/s3.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 3
    }, {
      img_url: '../../images/source/s1.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 4
    }, {
      img_url: '../../images/source/s2.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 5
    }, {
      img_url: '../../images/source/s3.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 6
    }],
    topProduct: {
      img_url: '../../images/source/s3.jpg',
      text: 'PINKO 春季纯色休闲外套',
      price: 199.00,
      id: 6
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function() {
      this.setData({
        dialogShow: true
      })
      console.log(this.data.dialogShow)
    },
    tapDialogButton: function () {
      this.setData({
        dialogShow: false
      })
    }
  },
})
