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
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
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
  }
</style>