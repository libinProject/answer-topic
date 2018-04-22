<template>
  <div class="waaper">
    <div class="logo"></div>
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <figure class="banner">
      <img src="../../static/img/home-baner.png" alt="">
    </figure>
    <span @click="toQa" class="btn-link to-ask">开始答题</span>
    <span @click="jump('/cheats')" class="btn-link to-cheats">偷越秘籍</span>
    <span @click="jump('/ranking')" class="btn-link to-ranking">排行榜</span>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
    <toast :msg="toastMsg" v-if="toastState"></toast>
  </div>
</template>

<script>
import Rule from "../components/rule.vue"
import toast from "../components/toast"
import storage from "../store/storage"
export default {
  data () {
    return {
      toastMsg: '',
      showRuleStatus: false,
      toastState:false
    }
  },
  components: {
    Rule,
    toast
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    // this.jump(`/PkAnswer/xiaohuihehe/60`)
  },
  mounted () {
    this.share()
  },
  methods: {
    showToast (msg) {
      if(this.toastState) return
      this.toastMsg = msg
      this.toastState = true
      setTimeout(() => {
        this.toastState = false
      }, 2e3);
    },
    showRule(){
      this.showRuleStatus =! this.showRuleStatus
    },
    toQa () {
      let todayQa = this.getCookie('qa')
      if (todayQa) {
        this.showToast('今天已经答过题了，请明天再来')
      }else{
        let user = JSON.parse(storage.get('userInfo'))
        this.jump(`/answer/${user.uid}`)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: url('../../static/img/home-bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    .logo{
      width: 196px;
      height: 54px;
      margin:66px 0 0 56px;
      background: url('../../static/img/logo.png')
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
      background: url('../../static/img/to-ask.png') no-repeat;
      margin:0 auto 20px;
    }
    .to-cheats{
      background: url('../../static/img/to-cheats.png') no-repeat;
    }
    .to-ranking{
      background: url('../../static/img/to-ranking.png') no-repeat;
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
</style>
