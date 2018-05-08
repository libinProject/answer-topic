<template>
  <div class="waaper">
    <div class="logo"></div>
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <div class="price-btn" @click="showPrice">奖项设置</div>
    <figure class="banner">
      <img src="http://www.vr0101.com/qa/static/img/home-baner.png" alt="">
    </figure>
    <span @click="getQuestion" class="btn-link to-ask">开始答题</span>
    <a href="https://mp.weixin.qq.com/s/f80J368Aak8aoCpUfwaAoQ" class="btn-link to-cheats">偷越秘籍</a>
    <span @click="jump('/ranking')" class="btn-link to-ranking">排行榜</span>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
    <Price v-show="showPriceStatus" :status="showPriceStatus" @showRule="showPrice"></Price>
    <toast :msg="toastMsg" v-if="toastState"></toast>
  </div>
</template>

<script>
import XHR from '../api'
import Rule from "../components/rule"
import Price from "../components/price"
import toast from "../components/toast"
import storage from "../store/storage"
export default {
  data () {
    return {
      toastMsg: '',
      showRuleStatus: false,
      showPriceStatus:false,
      toastState:false
    }
  },
  components: {
    Rule,
    toast,
    Price
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    this.getShare()
    // this.jump(`/PkAnswer/xiaohuihehe/60`)
  },
  mounted () {
    this.share()
  },
  methods: {
    getShare(){
      let shareUid = this.getQueryString('shareUid')
      let linkTime = this.getQueryString('time')
      let time = new Date().toLocaleDateString()
      if(shareUid && linkTime && (linkTime==time)){
        this.setCookie('shareUid',shareUid)
      }
    },
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
    showPrice () {
      this.showPriceStatus =! this.showPriceStatus
    },
    getQuestion() {
      let json = {
        batch:1,
        type:1,
        project:'king_of_answer'
      }
      XHR.getQs(json).then((res) => {
        let {data,status, message} = res.data
        if(status == '2'){
           this.showToast(message)
           return 
        }
        if(status=='0'){
          this.toQa()
        }
      })
    },
    toQa () {
      let todayQa = this.getCookie('qa')
      let todayFen = this.getCookie('todayFen')
      let isPc = /macintosh|window/.test(navigator.userAgent.toLowerCase());
      if(isPc){
        this.showToast('请在手机端答题')
        return
      }
      if (todayQa&&!todayFen) {
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
    background: url('http://www.vr0101.com/qa/static/img/home-bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    .logo{
      width: 196px;
      height: 54px;
      margin:66px 0 0 56px;
      background: url('http://www.vr0101.com/qa/static/img/logo.png');
    }
    .banner{
      width: 588px;
      height: 578px;
      margin:0 auto 35px;
      clear: both;
    }
    .btn-link{
      display: block;
      font-size: 0;
      width: 418px;
      height: 96px;
      background: url('http://www.vr0101.com/qa/static/img/to-ask.png') no-repeat;
      margin:0 auto 20px;
    }
    .to-cheats{
      background: url('http://www.vr0101.com/qa/static/img/to-cheats.png') no-repeat;
    }
    .to-ranking{
      background: url('http://www.vr0101.com/qa/static/img/to-ranking.png') no-repeat;
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
