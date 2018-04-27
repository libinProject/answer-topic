<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import XHR from './api'
export default {
  name: 'app',
  created () {
    this.getUserinfo()
  },
  methods: {
    getUserinfo () {
      let href = location.href
      if (!localStorage.getItem('userInfo')) {
        if(href.indexOf('openid')> -1){
          let json = {}
          json['uid'] = this.getQueryString('openid')
          json['nickname'] = this.getQueryString('nickname')
          json['headimgurl'] = this.getQueryString('headimgurl')
          localStorage.setItem('userInfo',JSON.stringify(json))
          this.getUser(json['uid'])
        }else{
          location.href = 'http://www.vr0101.com/auth'
        }
      }
    },
    getUser (uid) {
      let json={
        uid:`${uid}`
      }
      XHR.getUser(json).then((res) => {
        let {data,status} = res.data
        if(!status){
          localStorage.setItem('userInfo',JSON.stringify(data))
        }
      })
    }
  }
}
</script>

<style>
@import './mixin/publick.css';
#app {
  height: 100%;
  overflow: hidden;
}
.rule-btn,.price-btn{
  position: absolute;
  right: 0;
  top:60px;
  width: 155px;
  height: 60px;
  font-size: 28px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  z-index: 5;
}
.price-btn{
  top:150px;
}
.rule-btn:before,.price-btn:before{
  content:'';
  width: 51px;
  height: 71px;
  display: block;
  position: absolute;
  left: -40px;
  top: -7px;
  background: url('../static/img/rule.png');
  z-index: 10;
}
.price-btn:before{
  background: url('../static/img/price-icon.png');
}
.rule-btn::after,.price-btn:after{
  content:'';
  background-color: rgba( 0, 46, 115,0.349 );
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
