<template>
  <div class="waaper">
    <div class="rule-btn" @click="showRule">游戏规则</div>
    <div class="main">
      <div class="answer-box" v-if="qsIndex!=10">
       <div class="qsCount"> 
         <countDownSecond 
          :qsIndex="qsIndex"
          :lock="lock" 
          @stopCall="stopCall">
         </countDownSecond>
        </div>  
        <answer :ask="ask[qsIndex]" :qsIndex="qsIndex" :lock="lock" v-if="ask[qsIndex]" @select="select"></answer>
      </div>
      <answerOk 
        v-if="qsIndex==10"
        @submit="submit"
        @tipShare="tipShare"
        :rightAnswerCount="rightAnswerCount">
      </answerOk>
    </div>
    <Rule v-show="showRuleStatus" :status="showRuleStatus" @showRule="showRule"></Rule>
    <div class="wechat-tips" v-if="showShareTips" @click="tipShare"></div>
    <toast :msg="toastMsg" v-if="toastState"></toast>
    <loading-img v-if="submitStatus"></loading-img>
  </div>
</template>

<script>
import XHR from '../api'
import Rule from "../components/rule.vue"
import answer from "../components/answer"
import answerOk from "../components/answer-ok"
import countDownSecond from "../components/countDownSeconds"
import storage from "../store/storage"
import toast from "../components/toast"
import loadingImg from "../components/loading-img"
var wx = require('weixin-js-sdk');
export default {
  data () {
    return {
      qsIndex:0, // 当前问题下标
      ask:[],     // 所有问题
      lock:'false', // 是否选择问题 并上锁
      rightAnswerCount:0, // 答对题目数量
      showRuleStatus: false, // 显示规则
      uid:'xiaohuihehe',// 用户uid
      showShareTips:false,
      toastMsg: '',
      toastState:false,
      errAnswerList:[], //答错题目id
      submitStatus:false, // 提交状态
      shareData: {
        link:'http://www.vr0101.com/qa/index.html',
        des:'呼朋唤友来答题，潍柴王者就是你…',
        title:'呼朋唤友来答题，潍柴王者就是你…'
      }
    }
  },
  components: {
    Rule,
    answer,
    answerOk,
    toast,
    loadingImg,
    countDownSecond
  },
  watch: {
    rightAnswerCount (val, oldVal) {
      if(val > 6 || this.uid=='oeemZs0amHyBxarRXS4msd_DbI1E'||this.uid=='oeemZs0amHyBxarRXS4msd_DbI1E'||this.uid=='oeemZs1XQcsq5U7UODNjV2mUG8TY'){
        this.shareData['link'] = `http://www.vr0101.com/qa/#/PkAnswer/${this.uid}/${this.rightAnswerCount *10}`
        this.shareData['title']='***觉得这个游戏你肯定玩不到**分，不服来战！'
        this.shareData['des']='***觉得这个游戏你肯定玩不到**分，不服来战！'
        this.shareAnswer()
        console.log(this.shareData['link'])
      }
    }
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    this.uid = this.$route.params.uid
    this.getQuestion()
  },
  mounted () {
    this.scrollFooter()
    this.shareAnswer()
  },
  methods: {
    scrollFooter() {
      setTimeout(() => {
        this.$el.scrollTop = this.$el.scrollHeight - window.innerHeight
      }, 200);
    },
    showRule(){
      this.showRuleStatus =! this.showRuleStatus
    },
    showToast (msg) {
      if(this.toastState) return
      this.toastMsg = msg
      this.toastState = true
      setTimeout(() => {
        this.toastState = false
        this.$router.go(-1)
      }, 2e3);
    },
    getQuestion() {
      let json = {
        batch:1,
        type:1,
        project:'king_of_answer'
      }
      XHR.getQs(json).then((res) => {
        let {data,status} = res.data
        if(!status){
          this.ask = data
        }
      })
    },
    select (index,item) {
      if(this.lock == 'false'){
        this.lock = index
        // this.errAnswerList.push(item.id)
        // 计算正确答题个数
        if (index == this.ask[this.qsIndex].answer) {
          this.rightAnswerCount++
        }
        setTimeout(() => {
          this.lock = 'false'
          this.qsIndex++
        }, 1e3);
      }
    },
    // 提交成绩
    submit (phone) {
      this.submitStatus = true
      let json = {
        batch:window.batch,
        uid:this.uid,
        project:'king_of_answer',
        // errAnswerList: this.errAnswerList,
        rightAnswerCount :this.rightAnswerCount
      }
      XHR.submitAnswer(json).then((res) => {
        let {status} = res.data
        if(!status){
          this.submitStatus = false
          this.uploadUser(phone)
          this.setCookie('qa','isok')
          this.showToast('恭喜您提交成功')
        }
      })
    },
    uploadUser(phone){
      let userinfo = JSON.parse(storage.get('userInfo'))
      if (phone!=''){
        userinfo['phone'] = phone
        storage.set('userInfo',userinfo)
        XHR.updateUser(userinfo).then((res) => {
          let {status} = res.data
        })
      }
    },
    stopCall () {
      this.qsIndex++
    },
    tipShare(){
      this.showShareTips =!this.showShareTips
    },
    // 添加积分
    addIntegral(uid,integral){
      let json = {
        batch:window.batch,
        uid,
        project:'king_of_answer',
        integral
      }
      XHR.addIntegral(json).then((res) => {
        console.log(res.data)
      })
    },
    shareAnswer () {
      let that = this
      wx.ready(() => {
        wx.showAllNonBaseMenuItem();
        wx.hideMenuItems({
          menuList: ["menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email", "menuItem:share:weiboApp"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: that.shareData.title,
          link: that.shareData.link,
          imgUrl: 'http://www.vr0101.com/qa/static/img/share.jpg',
          success: (res) => {
            let qaShare = that.getCookie('qaShare')
            if (!qaShare) {
              that.addIntegral(that.uid,1)
              that.setCookie('qaShare','isok')
            }
          },
          cancel: (res) => {
            // 用户取消分享后执行的回调函数
          }
        })
        //分享给朋友
        wx.onMenuShareAppMessage({
          title: that.shareData.title,
          desc: that.shareData.des,
          link: that.shareData.link,
          imgUrl: 'http://www.vr0101.com/qa/static/img/share.jpg',
          success: function () {
            let qaShare = that.getCookie('qaShare')
              if (!qaShare) {
                that.addIntegral(that.uid,1)
                that.setCookie('qaShare','isok')
              }
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    overflow-y: auto;
    height: 100%;
      -webkit-overflow-scrolling: touch;
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
    width: 710px;
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
      background: #4162b5;
      border:2px solid #6ac5e4;
      margin: 140px auto 75px;
      border-radius: 16px;
      text-align: center;
      position: relative;
      .qsCount{
        position: relative;
        &::before,&::after{
          content:'';
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAWCAMAAACCEvCXAAAAP1BMVEUApv8ApP8Apv8Ao/8ApP8Apf8ApP8Apv8Apv8Apf8ApP8ApP8Apv8Apf8Apf8Apf8Apf8Apf8AqP8AqP8AqP/0BtUwAAAAFXRSTlNfJVsYK0AcU05FIBVXNy8zO0kFDwpI6o7vAAAA40lEQVQ4y63TSxKEIAwEUEWUP4hy/7NOnMpGM3wmZa9cvepqyXQcpZxu2aydZUxhX1eTtVbKCyEmDHx6r5TSWudsjFkh+x5CSinGKCEzxFq7QRaIc+i6X+5Ucw26ACNLXG7fHfu23PPrzi3Xc9zCdyNxl7brcV/q3uelv43sQFyQ6b6m6vJ2QJb2JfO+6MrWDtTtPN9U6+sYLrJ3V/7nCtZZ9F3+WfD7hodrn26hbq65ech1w319352Rpa68uxdMnm//jMkOY64ZODc35oqeK5num32BvVJxyfNtuvSdNc8itNwPfck8UBFj7c4AAAAASUVORK5CYII=) no-repeat 50% 50%; -webkit-background-size: 44px 11px; background-size: 44px 11px;
          position: absolute;
          width: 87px;
          height: 22px;
        }
        &::before{
          top: -60px;
          left: 50%;
          margin-left: -120px;
        }
        &::after{
          top: -60px;
          right: 50%;
          margin-right: -110px;
        }
      }
      canvas{
        position: absolute;
        top:-90px;
        left: 50%;
        transform: translate(-50%,0);
      }
  }
    .wechat-tips{
      position: fixed;
      z-index: 999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.8) url(https://s.kcimg.cn/public/images/wechat-share.png) no-repeat 100% 0;
    }
</style>
