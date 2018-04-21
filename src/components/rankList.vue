<template>
  <div :class="['list',index<3 ? 'top-list list-'+ index: '']">
    <div class="order-number">{{index+1}}</div>
    <div class="avatar-wrap">
      <figure class="avatar">
        <img :src="item.headimgurl" alt="">
      </figure>
    </div>
    <div class="name">{{item.nickname}}</div>
    <div class="label">{{item.dan}}</div>
  </div>
</template>

<script>
export default {
  props:['index','item'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less">
#app{
  display: flex;
}
  .list{
    display: flex;
    align-items: center;
    height: 100%;
    background: url('../../static/img/rank-list-bg.jpg') no-repeat;
    .order-number{
      text-align: center;
      width: 110px;
      font-size: 36px;
      color: #ffc000;
    }
    .avatar{
      width: 84px;
      height: 84px;
      border-radius: 50%;
      border:4px solid #03deff;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name{
      color: #1a2d63;
      font-size: 28px;
      flex: 1;
    }
    .label{
      border: 3px solid #0d53e0;
      border-radius: 8px;
      width: 144px;
      height: 50px;
      color: #0d53e0;
      font-size: 26px;
      text-align: center;
      line-height: 50px;
      margin-right: 50px;
    }
    .avatar-wrap{
      position: relative;
      width: 92px;
      height: 92px;
      margin: 0 20px 0 10px;
    }
  }
  .top-list{
    background: url('../../static/img/rank-list-one.jpg') no-repeat;
    overflow: visible;
    .order-number{
      font-size: 0;
    }
    .order-number::before{
      content:'';
      display: inline-flex;
      background: url('../../static/img/ranking-1.png') no-repeat;
      width: 54px;
      height: 66px;
    }
    .avatar-wrap::before{
      content: '';
      background: url('../../static/img/crown.png') no-repeat;
      width: 48px;
      height: 39px;
      position: absolute;
      top:-30px;
      left: 50%;
      margin-left: -24px;
    }
    .avatar{
      border-color: #ec8326;
    }
    .label{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAyCAMAAACETKJvAAAAgVBMVEUAAAA8jttAe9Y8jttAftY8jts8jttDaNBEaNE8jttDaNBDadFEaNA8jts8j9s8jttEaNBDaNBEaNBDaNA8jttDadFDaNA8jts+gtg/f9dAetZCbdI9idpDa9E8jNs9h9lBddRCcdNBd9VCb9JDadE9i9o+hNhBc9M/fNY9htk+hdlgIV/rAAAAFnRSTlMAkysMBvaylY9BQQzX19S9u7SyfXzY4HVAOwAAAXRJREFUWMPt2dtWwkAMheGhBwQUUNQGq1bsaSzv/4BmEsoAteSSWcv8+gDfCnAz27ii2UP2d/WhT+qdqvC/qr45a+3O7qgSy8uc+sHe+rZ9+7Ztu+6L++AarGiKIl1OIsMld9lYNYoy9ngReZhkCeQ9Ze/JhyDEDDzEQY0TFQCTmDyP2ZWYU59x6EB8I0uRx4P8hTyHRfvO5UGehEEB6wRB7j5Pi3tz4+L51N3ImAg9zyaIXgAgMjO8jwmkqTsR/r4WJpDmAEuDn9jNvz99MUDqQCaYAEBBClLQaQqSUpCUgqQUJKUgKQVJKUhKQVIKklKQlIKkFCSlIKl/AwrrSS+wR8+VexbemEByz8LhPZzTtLAJYlpAz4TGF559KB5ZeGbhicVvLGebz3CF2nK8+eDKcjFCFfhHKwtcaZ3wPEWiI8d7iENdjlDC6NMeJx8SNQyiAEZJPE/xgPeanc50Q4/Li/JxUHvwsIg9yMFYBGOidMUD3i9gMXXYcnEkJwAAAABJRU5ErkJggg==) no-repeat 50% 50%;
      border:none;
    }
  }
  .list-1{
    background: url('../../static/img/rank-list-two.jpg') no-repeat;
    .order-number::before{
      background: url('../../static/img/ranking-2.png') no-repeat;
    }
    .avatar{
      border-color: #c7cad9;
    }
    .label{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAyCAMAAACETKJvAAAAnFBMVEUAAADkiA7Kcgv6mxHLcgvniw/Lcgv+nhL+nhL+nhH+nhHLcgvLcgvKcgv+nhH+nhLKcgvKcgv+nhL+nxL+nhLLcwz+nhLKcgv+nhH4mRH7mxH9nRHjhw7McwvNdQvghQ7afw3RdwvylBDwkhDcgQ3pjA/TeQzPdgv2lxDYfQzUewzliQ7tjw/ukQ/niw7egw30lhDWfAzrjg/WewzJXjgwAAAAF3RSTlMADJL9+gazspaPQUEr19W9u318LCrY16YlxbgAAAGHSURBVFjD7dnbUsIwFIXhlPMZFbQbYkFBEahKq+//bu6VdCZMJ0zuJMzsjxf4Z9OrLAWjxriV+mTWCj7YK+zY8Xj8LcvycDi8wBs7ndanNXs28vybvcPPJ/tiW7ZhRVHs2aKyNJqT/lxZ7UZ6kc0B5BjIAc4B24MgLoKqB0Umh5mgLWyAe8D1gNZ62UtMz93FmtRzIHOfnTmQ7QFvD0NQ/UDVhRb7Wg9M2xyE+3SGibqyZNDlop5SI/567lUUHohojgN1VCS6mvpqnKZDFYkB0ZPif+zq3w9AQtRU/EmraBCRBEmQBJ2ToBAJCpGgEAkKkaAQCQqRoBAJCpGgEAkKkaB/p2MLiu5CEnSTQdE96UX26DmJ61mYqK9GrSyih3M9w7SQRTItEFHPjC+1jcVtUFAboezI4kaovBqhqs0H3AhVuM2nuViCxspC+HlN29U85XrgLKhED/P25OB6GGq8qxh6QFvkpTFPVQPeY2uVcc6q3sNFgVGMg8AeqL6KuVEsGMQD3kyxP0vigv8pPH5ZAAAAAElFTkSuQmCC) no-repeat 50% 50%;
    }
  }
  .list-2{
    background: url('../../static/img/rank-list-three.jpg') no-repeat;
    .order-number::before{
      background: url('../../static/img/ranking-3.png') no-repeat;
    }
    .avatar{
      border-color: #ab8288;
    }
    .label{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAyCAMAAACETKJvAAAAaVBMVEUAAADzY2LgTEzqWFfrWVjhTEzzY2LhTEzzY2LgTEzzY2LgTUzzY2LzY2LhTEzzY2LgTUzhTE3zY2LzYmHgTE3gTEzzY2LyYWDwX17nVFTiTk7vXV3tXFvlUlLjT0/pVlbsWlnkUVHqWFjmQ9/HAAAAFXRSTlMAk5IMBvr22NazQUErsiu9u318syq/pha/AAABNUlEQVRYw+3Z2XKDMAyFYSXQ7Es3TMnS0rz/Q0bCQmbiEF1GM9E/cP+N4coHqO/p/K0a73DAh/rl/qkzPrHm3HB/sQvXdp3aU+zI/fTVNb7cbDHZQKycVo9DD8eeKBJQ5ulELXuQw4kniaRATcrO865oEodjjRyQeAQ05uFyEIv2JKLzWa4LeHLF6ovOCGCHf88HmOgTRRs6oCUYaUtHNK+qNRhpFcIC8Is9/f/pK0KYAf7SYKYQgoMc5KBhDtJykJaDtByk5SAtB2k5SMtBWg7ScpCWg7QcpOUgrdcAmbvSM3fpae5a2NzFuZ1pYUvTgowvskDR23Uz+TT5xhKTlSWbWI53Rh98HrQv0zzFoIEnE0l3VzGp9wioHohGQTJPUTsc8JKHSx5ONJmHSpzkSRod0w94V8kdao/aT5tCAAAAAElFTkSuQmCC) no-repeat 50% 50%;
    }
  }
</style>