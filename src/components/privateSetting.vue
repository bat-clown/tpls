<template>
  <div class="n-priv f-cb" id="setting-box">
    <div class="item" style="display:none;">
      <h3><span class="f-fs1">@我</span><span class="sub s-fc3">接收@我提醒</span></h3>
      <ul class="n-plist">
        <li><label><input type="radio" class="f-rdi" name="at" value="0" data-action="at"> 所有人</label></li>
        <li><label><input type="radio" class="f-rdi" name="at" value="1" data-action="at"> 我关注的人</label></li>
      </ul>
    </div>
    <div class="item">
      <h3><span class="f-fs1">私信</span><span class="sub s-fc3">接收新私信提醒</span></h3>
      <ul class="n-plist">
        <li><label><input type="radio" class="f-rdi" name="shareSetting" value="0" data-action="shareSetting" checked="true"> 所有人</label></li>
        <li><label><input type="radio" class="f-rdi" name="shareSetting" value="1" data-action="shareSetting"> 我关注的人</label></li>
      </ul>
    </div>
    <div class="item">
      <h3><span class="f-fs1">通知</span></h3>
      <ul class="n-plist n-plist-1">
        <li><label><input type="checkbox" class="f-rdi" name="allowSubscriptionNotify" data-action="allowSubscriptionNotify" checked="true"> 歌单被收藏</label></li>
        <li><label><input type="checkbox" class="f-rdi" name="allowVideoSubscriptionNotify" data-action="allowVideoSubscriptionNotify" checked="true"> 视频被收藏</label></li>
        <li><label><input type="checkbox" class="f-rdi" name="allowDJRadioSubscriptionNotify" data-action="allowDJRadioSubscriptionNotify" checked="true"> 电台被订阅</label></li>
        <li><label><input type="checkbox" class="f-rdi" name="allowLikedNotify" data-action="allowLikedNotify" checked="true"> 收到赞</label></li>
        <li><label><input type="checkbox" class="f-rdi" name="allowNewFollowerNotify" data-action="allowNewFollowerNotify" checked="true"> 新粉丝</label></li>
      </ul>
    </div>
    <div class="item">
      <h3><span class="f-fs1">听歌排行</span></h3>
      <ul class="n-plist">
        <li><label><input type="radio" class="f-rdi" name="allowPeopleCanSeeMyPlayRecord" value="true" data-action="allowPeopleCanSeeMyPlayRecord" checked="true"> 所有人可见</label></li>
        <li><label><input type="radio" class="f-rdi" name="allowPeopleCanSeeMyPlayRecord" value="" data-action="allowPeopleCanSeeMyPlayRecord"> 仅自己可见</label></li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{

  }
</script>


<style>
  .n-priv .item{
    padding: 38px 0 25px;
    border-bottom:1px dotted #ccc;
  }
  .n-priv h3{
    height: 33px;
  }
  .f-fs1{
    font-size: 14px;
  }
  .n-priv h3 .sub{
    margin-left: 12px;
    font-weight:normal;
  }
  .s-fc3, a.s-fc3:hover{
    color: #666;
  }
  .n-plist{
    margin-left: 40px;
  }
  .n-plist li{
    height: 30px;
  }
  .f-rdi{
    margin: -2px 0 0 -1px;
    vertical-align: middle;
  }
  .n-plist-1{
    margin-top: -30px;
  }
</style>
