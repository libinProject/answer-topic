<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './mixin/publick.css';
#app {
  display: flex;
  height: 100%;
}
.rule-btn{
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
.rule-btn::after{
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
