<template>
  <div class="waaper">
    <div class="logo"></div>
    <div class="rule-btn">游戏规则</div>
    <figure class="banner">
      <img src="../assets/home-baner.png" alt="">
    </figure>
    <a href="" class="btn-link to-ask">开始答题</a>
    <a href="" class="btn-link to-cheats">偷越秘籍</a>
    <a href="/#/ranking" class="btn-link to-ranking">排行榜</a>
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
    .banner{
      width: 588px;
      height: 578px;
      margin:0 auto 35px;
    }
    .btn-link{
      display: block;
      font-size: 0;
      width: 418px;
      height: 96px;
      background: url('../assets/to-ask.png') no-repeat;
      margin:0 auto 20px;
    }
    .to-cheats{
      background: url('../assets/to-cheats.png') no-repeat;
    }
    .to-ranking{
      background: url('../assets/to-ranking.png') no-repeat;
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
