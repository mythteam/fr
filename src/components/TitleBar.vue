<template>
    <div class="title-bar">{{title}}</div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>
<style>
.title-bar {
  background: #000;
  color: #fff;
  height: 30px;
  text-align: center;
  line-height: 30px;
  padding: 5px 0;
}
</style>
