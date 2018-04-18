<template>
  <div class="waaper">
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <div class="main">
      <!-- <div class="answer-box">
        <answer :ask="ask"></answer>
      </div> -->
      <answerOk></answerOk>
    </div>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
  </div>
</template>

<script>
import Rule from "../components/rule.vue"
import answer from "../components/answer"
import answerOk from "../components/answer-ok"
export default {
  data () {
    return {
      ask:[
        {
          status:0
        },
        {
          status:1
        },
        {
          status:2
        },
        {
          status:0
        }
      ],
      showRuleStatus: false
    }
  },
  components: {
    Rule,
    answer,
    answerOk
  },
  created () {
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
    display: flex;
    overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    background: url('../assets/ranking-bg.jpg') 50% 50% no-repeat;
    background-size: cover; 
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    &::before{
      content:'';
      display: block;
      position: absolute;
      background: url('../assets/top-icon.png');
      width: 724px;
      height: 397px;
      top:0px;
      left: 50%;
      z-index: 3;
      margin-left: -362px;
    } 
  }
  .main{
    width: 710px;
    min-height: 1035px;
    margin:282px auto 20px;
    border:2px dashed rgb(0, 160, 233);
    background-image: linear-gradient( -85deg, rgb(37,66,161) 10%, rgb(20,63,172) 90%);
    border-radius:17px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .answer-box{
     width: 625px;
      overflow: hidden;
      background: #4162b5;
      border:2px solid #6ac5e4;
      margin: 140px auto 75px;
      border-radius: 16px;
      text-align: center;
  }
</style>
