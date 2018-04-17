<template>
  <div class="waaper">
    <div class="rule-btn">游戏规则</div>
    <div class="main">
      <div class="tabs">
        <span :class="[tabs=='0'?'select':'']" @click="tabsSwitch(0)">期榜</span>
        <span :class="[tabs=='1'?'select':'']" @click="tabsSwitch(1)">总榜</span>
      </div>
      <!-- 期榜 -->
      <ul class="list-box" v-show="tabs==0">
          <li v-for="(item,index) in list" :key="index">
            <rankList :item='item' :index='index'></rankList>
          </li>
      </ul>
      <!-- 总榜 -->
      <ul class="list-box" v-show="tabs==1">
          <li v-for="(item,index) in list" :key="index">
            <rankList :item='item' :index='index'></rankList>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import rankList from '../components/rankList.vue'
export default {
  data () {
    return {
      list: [0,1,2,3,4,5,6,7],
      tabs:'0'
    }
  },
  components: {
    rankList
  },
  created () {
  },
  methods: {
    tabsSwitch(index){
      this.tabs = index
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    flex:1;
    display: flex;
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
    flex: 1;
    margin:280px auto 20px;
    border:2px dashed rgb(0, 160, 233);
    background-image: linear-gradient( -85deg, rgb(37,66,161) 10%, rgb(20,63,172) 90%);
    border-radius:17px;
    position: relative;
    padding: 130px 60px 50px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .tabs{
    background: #2264b1;
    height: 70px;
    display: flex;
    span{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #fff;
      flex-direction: column;
      position: relative;
    }
    .select{
      color: #1bdbec;
      &::after{
        content: '';
        width: 65px;
        height: 4px;
        display: block;
        background: #1bdbec;
        position: absolute;
        bottom: 6px;
      }
    }
  }
  .list-box{
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex: 1;
    padding-top: 20px;
  }
  .list-box li{
    height: 132px;
    margin-bottom: 20px;
  }
</style>
