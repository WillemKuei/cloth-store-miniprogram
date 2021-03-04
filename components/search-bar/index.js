// components/search-bar/search-bar.js
Component({
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },
  data: {
    someData: {}
  },
  methods: {
    customMethod: function () {
      console.log("Hello World");
    }
  }
})