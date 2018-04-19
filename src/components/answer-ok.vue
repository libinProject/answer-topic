<template>
<form action="" class="ask-ok">
  <div class="ask-content">
    <var class="fenshu">60分</var>
    <input type="text" placeholder="输入您的手机号码">
    <span class="tips">首次答题用户需完善你的电话信息，以便在商城中完成积分兑换</span>
  </div>
  <button>确定</button>
  <button class="share">邀好友挑战</button>
</form>
</template>

<script>
export default {
  props:['ask'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .ask-ok{
    text-align: center;
    &::before{
      content: '恭喜您';
      display: block;
      position: absolute;
      width: 267px;
      height: 57px;
      background: url('../assets/rule-header.png') no-repeat;
      left: 50%;
      margin-left: -138px;
      top:138px;
      z-index: 10;
      font-size: 36px;
      text-align: center;
      color: #ffffff;
    }
    .ask-content{
      margin:160px auto 60px;
      width: 640px;
      min-height: 550px;
      border-radius: 16px;
      background:rgba(247, 217, 156, 0.18);
      border:1px solid #6ac5e4;
      padding: 0 60px;
      box-sizing: border-box;
      .fenshu{
        font-size: 72px;
        line-height: 82px;
        color: #fff;
        margin-bottom: 44px;
        display: block;
        &:before{
          content:'本次答题获';
          display: block;
          border-radius: 23px;
          background-color: rgba(255, 63, 25,0.7);
          width: 207px;
          height: 47px;
          font-size: 28px;
          text-align: center;
          line-height: 46px;
          margin:92px auto 26px;
        }
      }
      input{
        border-radius: 11px;
        background-color: rgb(206, 250, 255);
        width: 521px;
        height: 100px;
        margin-bottom: 28px;
        padding: 0 20px;
        font-size: 28px;
        &::-webkit-input-placeholder{
          text-align: center;
          color: #00163a;
        }
      }
      .tips{
        font-size: 28px;
        line-height: 43px;
        color: #5dd3ff;
      }
    }
    button{
       width: 542px;
       background-image: -webkit-linear-gradient( -90deg, rgb(255,120,89) 0%, rgb(255,94,74) 47%, rgb(254,68,59) 100%);
      height: 90px;
      border-radius: 45px;
      color: #4b1d04;
      font-size: 32px;
      margin-bottom: 25px;
      outline: none;
      border:none;
    }
    .share{
      background-image: -webkit-linear-gradient( -90deg, rgb(87,239,249) 0%, rgb(49,195,221) 47%, rgb(11,151,192) 100%);
    }
  }
</style>
