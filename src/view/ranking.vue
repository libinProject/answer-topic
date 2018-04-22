<template>
  <div class="waaper">
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <div class="main">
      <div class="tabs">
        <span :class="[tabs=='0'?'select':'']" @click="tabsSwitch(0)">期榜</span>
        <span :class="[tabs=='1'?'select':'']" @click="tabsSwitch(1)">总榜</span>
      </div>
      <!-- 期榜 -->
      <ul class="list-box" v-show="tabs==0" @scroll="batchSccroll">
          <li v-for="(item,index) in batch.list" :key="index">
            <rankList :item='item' :index='index'></rankList>
          </li>
          <li class="null" v-if="!batch.list.length">暂无数据</li>
          <li class="loding" v-else>{{batch.end?'已经到底了':'正在加载中'}}</li>
      </ul>
      <!-- 总榜 -->
      <ul class="list-box" v-show="tabs==1" @scroll="allSccroll">
          <li v-for="(item,index) in allList.list" :key="index">
            <rankList :item='item' :index='index'></rankList>
          </li>
          <li class="null" v-if="!allList.list.length">暂无数据</li>
          <li class="loding" v-else>{{batch.end?'已经到底了':'正在加载中'}}</li>
      </ul>
    </div>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
    <back></back>
  </div>
</template>

<script>
import XHR from '../api'
import rankList from '../components/rankList.vue'
import Rule from "../components/rule.vue"
import back from "../components/back"
export default {
  data () {
    return {
      batch: {
        list:[],
        loading:0,
        end:false,
        page:0
      },
      allList: {
        list:[],
        loading:0,
        end:false,
        page:0
      },
      showRuleStatus: false,
      tabs:'0'
    }
  },
  components: {
    rankList,
    Rule,
    back
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    this.getTop(this.allList)  // 总榜
    this.getTop(this.batch) // 期榜
  },
  mounted () {
    this.share()
  },
  methods: {
    showRule(){
      this.showRuleStatus =! this.showRuleStatus
    },
    tabsSwitch(index){
      this.tabs = index
    },
    getTop (type) {
      if (type.loading) {
        return
      }
      type.loading = 1
      let json = {
        project:'king_of_answer',
        size:20,
        page:type.page
      }
      if (type !== this.allList) {
        json['batch'] = window.batch 
      }
      XHR.getTop(json).then((res) => {
        let {data,status} = res.data
        if(!status){
          type.list = [...type.list, ...data]
          if (data.length< 20) {
            type.end = true
          }else{
            type.loading = 0
            type.page++
          }
        }
      })
    },
    allSccroll (e) {
     if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight-100 && !this.allList.loading) {
        this.getTop(this.allList)
      }
    },
    batchSccroll(e) {
      if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight-100 && !this.batch.loading) {
        this.getTop(this.batch)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    flex:1;
    height: 100%;
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
    .null{
      min-height: 200px;
      color: #fff;
      font-size: 50px;
      text-align: center;
      line-height: 200px;
    }
  }
  .list-box li{
    height: 132px;
    margin-bottom: 20px;
    &.loding{
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      color: #fff;
      text-align: center;
      margin-bottom: 0;
    }
  }
</style>
