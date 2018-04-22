import XHR from '../api'
var wx = require('weixin-js-sdk');
export default {
  computed: {
  },
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.back()
      }
    },
    setCookie (name, value) {
      var curDate = new Date();
      //当前时间戳  
      var curTamp = curDate.getTime();
      //当前日期
      var curDay = curDate.toLocaleDateString();
      var curWeeHours = 0;
      curWeeHours = new Date(curDay).getTime() - 1;
      //当日已经过去的时间（毫秒）  
      var passedTamp = curTamp - curWeeHours;
      //当日剩余时间  
      var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
      var leftTime = new Date();
      leftTime.setTime(leftTamp + curTamp);
      //创建cookie  
      document.cookie = name + "=" + value + ";expires=" + leftTime.toGMTString() + ";path=/";
    },
    getCookie (name) {
      //name 为想要取到的键值的键名
      var reg = /\s/g;
      var result = document.cookie.replace(reg, "");
      var resultArr = result.split(";");
      for (var i = 0; i < resultArr.length; i++) {
        var nameArr = resultArr[i].split("=");
        if (nameArr[0] == name) {
          return nameArr[1];
        }
      }
    },
    getQueryString(name) {
      /* eslint-disable */
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
      /* eslint-enable */
    },
    getWxconfig() {
      XHR.getWechat({
        url: `${window.location.href.split('#')[0]}`
      }).then( (res)=> {
        let { data, status } = res.data
        try {
          wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'menuItem:favorite', 'showAllNonBaseMenuItem', 'hideMenuItems']
          })
        } catch (e) {}
      })
    },
    hideshare() {
      wx.ready(function () {
        wx.hideAllNonBaseMenuItem();
        wx.hideMenuItems({
          menuList: ["menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email", "menuItem:share:weiboApp"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
      })
    },
    share () {
      wx.ready(() => {
        wx.showAllNonBaseMenuItem();
        wx.hideMenuItems({
          menuList: ["menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email", "menuItem:share:weiboApp"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: '答题王',
          link: 'http://www.vr0101.com/qa/index.html',
          imgUrl: 'http://www.vr0101.com/qa/static/img/share.jpg',
          success: (res) => {
            console.log(_this.shopinfo)
          },
          cancel: (res) => {
            // 用户取消分享后执行的回调函数
          }
        })
        //分享给朋友
        wx.onMenuShareAppMessage({
          title: '答题王',
          desc: '答题王',
          link: 'http://www.vr0101.com/qa/index.html',
          imgUrl: 'http://www.vr0101.com/qa/static/img/share.jpg',
          success: function () {
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }
}
