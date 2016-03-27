<template>
  <title-bar title="找语伴练口语"></title-bar>
  <div>
    <div class="weui_grids">
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">英</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">韩</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">日</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">法</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">德</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">粤</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">意</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">俄</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
      <a href="javascript:;" class="weui_grid yb-grid">
        <div class="yb-grid-title">
          <span class="yb-grid-text">普</span>
        </div>
        <p class="weui_grid_label">
          100%纯母语<br>
          <span class="red">¥100/小时</span>起
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import TitleBar from '../components/TitleBar'

export default {
    components: {
        TitleBar
    }
}
</script>

<style>
  .yb-grid-title {
    text-align: center;
    background: #84CEFF;
    border-radius: 33px;
    color: #fff;
    width: 60px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
  }
  .yb-grid .weui_grid_label {
    margin-top: 15px;
    font-size: 12px;
  }
  .yb-grid .weui_grid_label .red {
    color: red;
  }
</style>
