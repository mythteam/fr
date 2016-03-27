<template>
  <div class="media">
    <div class="media-left">
      <a href="#">
        <vui-avatar :alt="user.name"></vui-avatar>
      </a>
    </div>
    <div class="media-body">
      <span class="media-heading">{{user.name}}</span>
      <span class="text-muted">女，20岁</span>
      <span class="red pull-right">¥ 100/小时</span>
      <p class="mt5">母语 韩语， 会说 普通话</p>
      <p>来自 韩国 首尔，住在 北京 海淀</p>
    </div>
  </div>
</template>
<script>
import VuiAvatar from '../components/Avatar'
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    VuiAvatar
  }
}
</script>

<style>
@import '../css/media.css';
.media {
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #dfdfdf;
  margin-top: 0;
}
.media:last-child {
  border-bottom: 1px solid #dfdfdf;
}
</style>
