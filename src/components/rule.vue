<template>
  <ul class="rule-pop">
    <li>每日答题：每日上线10道题进行计时答题，每答对一道题积10分，答题错误不积分并自动显示正确答案，每个用户每日仅能参与一次。</li>
    <li>邀请好友：分享活动邀请好友答题，每日分享仅可获1分奖励（分享次数不限），成功邀请1位好友答题再获2分奖励，（好友答题提交成功算是邀请成功）。</li>
    <li>好友对战：每日答题分数达到70分后可邀请好友挑战，好友挑战失败，发起者获得1分奖励，好友挑战成功，挑战者获2分奖励。</li>
    <li>排名形式：每日将根据用户的分进行排行（相同分数按时间顺序），同时每日积分将计入得分总榜。形成周榜、月榜和总榜。</li>
    <li>奖励机制：每日答题积分可在潍柴商城中兑换相应礼品（10个积分兑换1个金币），答题共分为8周，每周前三名奖励获得相应奖品。最后总榜前三名将直接晋级线下总决赛，获得角逐最终大奖资格。</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
  .rule-pop{
    position: fixed;
    z-index: 10;
    top:130px;
    width: 615px;
    left: 50%;
    margin-left: -307px;
    min-height: 100px;
    border:1px solid #09def7;
    background: #003463;
    padding: 80px 40px 0;
    box-sizing: border-box;
  }
  li{
      font-size: 24px;
      line-height: 45px;
      color: #fff;
    }
</style>
