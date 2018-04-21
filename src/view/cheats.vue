<template>
  <div class="waaper">
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <div class="main">
      <div class="cheats">
        <div class="header">
          <figure>
            <img src="../../static/img/cheats.png" alt="">
          </figure>
          <span>潍坊斯太尔动力主营潍柴发动机、潍柴发电机组、潍柴原厂配件、潍柴气体机、潍柴专用机油等。</span>
        </div>
        <div class="footer">
          <button>确定</button>
        </div>
      </div>
    </div>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
  </div>
</template>

<script>
import Rule from "../components/rule.vue"
export default {
  data () {
    return {
      showRuleStatus: false
    }
  },
  components: {
    Rule
  },
  created () {
    this.getWxconfig()
    this.hideshare()
  },
  mounted () {
    this.share()
  },
  methods: {
    showRule(){
      this.showRuleStatus =! this.showRuleStatus
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    flex:1;
    display: flex;
    background: url('../../static/img/ranking-bg.jpg') 50% 50% no-repeat;
    background-size: cover; 
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    &::before{
      content:'';
      display: block;
      position: absolute;
      background: url('../../static/img/top-icon.png');
      width: 724px;
      height: 397px;
      top:0px;
      left: 50%;
      z-index: 3;
      margin-left: -362px;
    } 
  }
  .main{
    flex: 1;
    overflow: hidden;
    margin:245px auto 60px;
    border:2px dashed rgb(0, 160, 233);
    background-image: linear-gradient( -85deg, rgb(37,66,161) 10%, rgb(20,63,172) 90%);
    border-radius:17px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    .cheats{
      width: 575px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background: #f7d99c;
      border:3px solid #fbedd0;
      border-radius: 10px;
      margin: 195px auto 75px;
      figure{
        width: 483px;
        height: 335px;
        text-align: center;
        line-height: 335px;
        background: #ffffff;
        margin:60px auto 28px;
        img{
          width: 455px;
          height: 305px;
          vertical-align: middle;
        }
      }
      span{
        font-size: 24px;
        line-height: 38px;
        display: block;
        color: #d98107;
        padding: 0 60px 23px 50px;
      }
      .footer{
        height: 195px;
        line-height: 195px;
        text-align: center;
        background: #fbedd0;
        button{
          background-image: -webkit-linear-gradient( -90deg, rgb(255,120,89) 0%, rgb(255,94,74) 47%, rgb(254,68,59) 100%);
          box-shadow: 0px 3px 4px 0px rgba(211, 37, 37, 0.4);
          width: 432px;
          height: 97px;
          border-radius: 48px;
          font-size: 32px;
          color: #ffcb4e;
        }
      }
    }
  }
</style>
