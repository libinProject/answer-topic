<template>
  <div class="waaper">
    <div class="logo"></div>
    <div class="rule">游戏规则</div>
    <div class="banner"></div>
    <a href="" class="home-btn">开始答题</a>
    <a href="" class="home-btn">偷越秘籍</a>
    <a href="" class="home-btn">排行榜</a>
    <div class="mark"></div>
    <Rule></Rule>
  </div>
</template>

<script>
import Rule from "../components/rule.vue"
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Rule
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .waaper{
    flex:1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: url('../assets/home-bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    .logo{
      width: 196px;
      height: 54px;
      margin:66px 0 0 56px;
      background: url('../assets/logo.png')
    }
    .rule{
      position: absolute;
      right: 0;
      top:60px;
      width: 197px;
      height: 60px;
      font-size: 28px;
      line-height: 60px;
      color: #fff;
      text-align: center;
      z-index: 1;
      &::after{
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
    }

    .home-btn{
      display: block; 
      margin:25px auto 0;
      border-width: 2px;
      border-style: solid;
      background-image: linear-gradient( 90deg, rgb(255,255,0) 0%, rgb(234,215,10) 47%, rgb(212,174,20) 100%);
      box-shadow: 1.5px 2.598px 4px 0px rgb( 253, 255, 62 );
      width: 409px;
      height: 87px;
      font-size: 32px;
      color: #4b1d04;
    }
  }
  .mark{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(11, 52, 129, 0.69);
    z-index: 10;
  }
</style>
