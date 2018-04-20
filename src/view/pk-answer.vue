<template>
  <div class="waaper">
    <section class="header">
      <div class="info">
        <div class="head">
          <figure>
            <img src="../../static/img/my-head.png" alt="">
          </figure> 
        </div>
        <span class="name">nanana</span>
        <span class="level">潍柴白丁</span>
      </div>
      <span class="pk"></span>
      <!-- 失败后显示分数对比 -->
      <div class="pk-number" v-if="pkStatus==2">3232 <em>vs</em> 5678</div>
      <div class="info other-info">
        <div class="head">
          <figure>
            <img src="../../static/img/other-head.png" alt="">
          </figure>  
        </div>
        <span class="name">nanana</span>
        <span class="level">潍柴白丁</span>
      </div>
    </section>
    <div class="answer-box" v-if="pkStatus==0">
        <answer :ask="ask"></answer>
    </div>
    <pk-ok v-if="pkStatus==1"></pk-ok>
    <pk-err v-if="pkStatus==2"></pk-err>
  </div>
</template>

<script>
import answer from "../components/answer"
import pkOk from "../components/pk-ok"
import pkErr from "../components/pk-err"
export default {
  data () {
    return {
      ask:[
        {
          status:0
        },
        {
          status:0
        },
        {
          status:0
        },
        {
          status:0
        }
      ],
      pkStatus:'0'
    }
  },
  components: {
    answer,
    pkOk,
    pkErr
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  #app{
    height: 100%;
  }
  .waaper{
    flex:1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: #05438d;
  }
  .header{
    position: relative;
    min-height: 330px;
    padding: 64px 50px 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    background: url(../../static/img/pk-bg.png) no-repeat top;
  }
  .info{
    text-align: center;
    .head{
      width: 228px;
      height: 236px;
      position: relative;
      z-index: 1;
      padding: 21px 16px;
      box-sizing: border-box;
      &:before{
        background: url('../../static/img/my-Halo.png') no-repeat;
        content: '';
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: -1;
        animation:rotating 5s linear infinite;
        display: block;
      }
      figure{
        width: 195px;
        height: 195px;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .name{
      font-size: 32px;
      line-height: 68px;
      color: #0bd4ff;
      display: block;
    }
    .level{
      font-size: 24px;
      color: #fff;
      border:2px solid rgb(230, 164, 18);
      border-radius: 5px;
      width: 115px;
      height: 34px;
      padding: 2px 10px;
      line-height: 34px;
    }
  }
  .other-info{
    .head{
      background: url('../../static/img/other-Halo.png') no-repeat; 
    }
    .level{
      border-color: rgb(8, 177, 240);
    }
  } 
  .pk{
    background: url('../../static/img/pk.png') no-repeat;
    width: 286px;
    height: 98px;
    position: absolute;
    left: 50%;
    margin-left: -160px;
    top: 134px;
    z-index: -1;
  }
  .pk-number{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    top: 260px;
    font-size: 30px;
    line-height: 30px;
    color: #fff;
    em{
      color: #e0cb1c;
    }
  }
  .answer-box{
     width: 646px;
      overflow: hidden;
      background:rgba(247, 217, 156, 0.18);
      border:2px solid #6ac5e4;
      margin: 66px auto 95px;
      border-radius: 16px;
      text-align: center;
  }
  @keyframes rotating{
    from{transform:rotate(0)}
    to{transform:rotate(360deg)}
  }
</style>
