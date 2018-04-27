<template>
<transition name="fade">
  <div class="rule-pop" @click="showRule">
    <div class="rule-main">
      <div class="lists answer">每天答10道题，得<em>10</em>分 <span class="num">+10</span></div>
      <div class="lists pk">
        <p>一天只能被邀请答题<em>2</em>次哦！其中一次答题满<em>7</em>分即可发起挑战。</p>
        <p>2次答题都答对了，得<em>20</em>分，挑战成功1次奖励<em>2</em>分，2次得<em>4</em>分！随机题目也不难嘛。</p>
        <span class="num two">+20</span>
        <span class="num">+4</span>
      </div>
      <div class="lists share">分享给朋友或者朋友圈不限次数，只得<em>1</em>分。<span class="num">+1</span></div>
      <div class="lists topk">
        <p>每日答题得7分以上可邀请好友PK，每天可被邀请4次。</p>
        <p>4个挑战者失败不得分，我得<em>4</em>分，挑战者的题为随机题。</p>
        <span class="num">+4</span>
      </div>
      <div class="num-all">10+1+4+20+4=39</div>
    </div>
    
  </div>
</transition>
</template>

<script>
export default {
  props:['status'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showRule(){
      this.$emit('showRule')
    }
  }
}
</script>

<style scoped lang="less">
@yellow: #f7a016;
  .rule-pop{
    position: fixed;
    z-index: 1000;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(11, 52, 129, 0.69);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::before{
      content:'游戏规则';
      display: block;
      position: absolute;
      width: 267px;
      height: 57px;
      background: url('../../static/img/rule-header.png') no-repeat;
      left: 50%;
      margin-left: -138px;
      top:73px;
      z-index: 10;
      font-size: 36px;
      text-align: center;
      color: #ffffff;
    }
    .rule-main{
      position: relative;
      width: 615px;
      padding: 115px 0 0;
      box-sizing: border-box;
      background-color: rgba( 0, 42, 82 ,0.78);
      border:1px solid #09def7;
      max-height: 2000px;
      margin:100px auto 0;
      transition: all 0.7s ease-in;
    }
  }
  .lists{
    color: #fff;
    font-size: 24px;
    line-height: 34px;
    color: #fff;
    padding: 0 40px 0 180px;
    position: relative;
    em{
      font-size: 28px;
      color: @yellow;
    }
    .num{
      position: absolute;
      display: block;
      width: 64px;
      height: 64px;
      background: url('../../static/img/rule-num.png') no-repeat;
      text-align: center;
      line-height: 64px;
      font-size: 24px;
    }
    &::before{
      content:'';
      position: absolute;
      display: block;
    }
    &.answer::before{
      width: 150px;
      height: 51px;
      background: url('../../static/img/rule-1.png') no-repeat;
      top:0px;
      left: -3px;
    }
    &.answer{
      height: 70px;
      line-height: 70px;
      .num{
        top:0px;
        right: 20px;
      }
    }
  }
  .pk{
    padding-top: 40px;
      &::before{
        content: '';
        background: url('../../static/img/rule-topk.png') no-repeat;
        width: 149px;
        height: 105px;
        top:28px;
        left: -3px;
      }
      p{
        font-size: 24px;
        line-height: 45px;
        margin-top: 30px;
      }
      .num{
        right: 25px;
        bottom: -26px;
      }
      .two{
        right:110px;
      }
  }
  .share{
      margin-top: 60px;
      &::before{
        content: '';
        background: url('../../static/img/rule-share.png') no-repeat;
        width: 149px;
        height: 50px;
        top:0;
        left: -3px;
      }
      font-size: 24px;
      line-height: 45px;
      padding-right: 65px;
      .num{
        right: 25px;
        bottom: -26px;
      }
  }
  .topk{
      &::before{
        content: '';
        background: url('../../static/img/rule-pk.png') no-repeat;
        width: 149px;
        height: 107px;
        top:-60px;
        left: -3px;
      }
      font-size: 24px;
      line-height: 45px;
      margin-top: 70px;
      padding-right: 65px;
      .num{
        right: 25px;
        bottom: -26px;
      }
  }
  .num-all{
    &::before{
      width: 503px;
      height: 114px;
      background: url('../../static/img/rule-footer.png') no-repeat;
      content: '';
      margin:37px auto 15px;
      display: block;
    }
    text-align: center;
    font-size: 24px;
    line-height: 45px;
    padding-bottom: 40px;
    color: @yellow;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s;
     transform: translate(0, 0);
  }
  .fade-enter, .fade-leave-active {
    transform: translate(0, 100%);
  }
</style>
