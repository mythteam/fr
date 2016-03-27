<template>
  <a href="javascript:" class="weui_btn weui_btn_orange" :class="{'weui_btn_disabled':disabled, 'weui_btn_mini': mini}">
    {{text}}<slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    mini: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.weui_btn_orange {
  background-color: #FF6600;
}
.weui_btn_orange:not(.weui_btn_disabled):visited {
  color: #fff;
}
.weui_btn_orange:not(.weui_btn_disabled):active {
  color: rgba(255, 255, 255, 0.4);
  background-color: #FF3C00;
}
</style>
