<template>
<form action="" class="ask-ok">
  <div class="ask-content">

  </div>
  <button>确定</button>
  <button>邀好友挑战</button>
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
    background:rgba(247, 217, 156, 0.18);
    border-radius: 16px;
    width: 640px;
    margin:0 auto;
    border:1px solid #6ac5e4;
    text-align: center;
    margin:160px auto 25px;
    button{
       width: 542px;
       background-image: -webkit-linear-gradient( -90deg, rgb(255,120,89) 0%, rgb(255,94,74) 47%, rgb(254,68,59) 100%);
        height: 90px;
      border-radius: 45px;
      color: #4b1d04;
      font-size: 32px;
      margin-bottom: 25px;
    }
  }
</style>