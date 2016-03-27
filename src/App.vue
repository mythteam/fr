<template>
  <div class="weui_tab">
    <div class="weui_tab_bd">
      <div class="weui_tab_bd_item">
        <!-- 路由外链 -->
        <router-view></router-view>
      </div>
    </div>
    <div class="weui_tabbar">
      <a v-link="{ path: '/landingpage' }" class="weui_tabbar_item">
        <p class="weui_tabbar_label">首页</p>
      </a>
      <a v-link="{ path: '/partners' }" class="weui_tabbar_item">
        <p class="weui_tabbar_label">语伴</p>
      </a>
      <a v-link="{ path: '/order' }" class="weui_tabbar_item">
        <p class="weui_tabbar_label">订单</p>
      </a>
      <a v-link="{ path: '/me' }" class="weui_tabbar_item">
        <p class="weui_tabbar_label">我的</p>
      </a>
    </div>
  </div>
</template>

<script>
import Button from 'vux/Button'
import Style from 'vux/Style'

export default {
  data () {
    return {

    }
  },
  components: {
    Style,
    Button
    // Group,
    // Cell
  }
}
</script>

<style>
html, body {
  height: 100%;
  background-color: #fbf9fe;
}
.mt5 {
  margin-top: 5px;
}
.text-center {
  text-align: center;
}
.text-muted {
  color: #777;
}
.pull-right {
  float:right;
}
.red {
  color:red;
}
.content {
  padding: 5px 10px;
}
.weui_cell {
  font-size: 13px;
}
.weui_tab {
  position: relative;
  height: 100%;
}
.weui_tab_bd .weui_tab_bd_item {
  height: 100%;
  overflow: auto;
}
.weui_tabbar_item {
  padding: 10px 0 !important;
  border-top: 2px solid #dfdfdf;
}
.weui_tabbar_label {
  height: 20px;
  line-height: 20px;
}
.weui_tab_bd {
  padding-bottom: 40px!important;
}
.weui_tab_bd .weui_tab_bd_item {
  display: block;
}
.weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {
  color: #0000FF !important;
}
.weui_bar_item_on {
  border-top: 2px solid #0000FF;
}
.img-circle {
  border-radius: 50%;
}
.clearfix:before, .clearfix:after {
  content: " ";
  display: table
}
.clearfix:after {
  clear: both;
}
</style>
