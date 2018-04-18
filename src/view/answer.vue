<template>
  <div class="waaper">
   答题
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
  }
</style>