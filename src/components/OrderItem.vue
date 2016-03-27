<template>
  <div class="order-container">
    <div class="order-title">
      <span class="order-time">2016-03-10 20:30:10</span>
      <span class="order-label">未支付</span>
    </div>
    <div class="order-content">
      <div class="order-content-left">
        <a href="#">
          <img class="img-circle media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTM4MzQ0MGJiYyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MzgzNDQwYmJjIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNC41IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" alt="...">
        </a>
      </div>
      <div class="order-content-body">
        <span>韩语口语陪练 {{order.title}}</span>
        <p class="mt5">上课时间：2016-03-10 20:30</p>
        <p class="mt5">上课老师：戴安娜</p></div></a>
      <div class="order-content-right">
        一小时
      </div>
    </div>
    <div class="order-footer clearfix">
      <div class="order-footer-left">¥ 100/小时</div>
      <div class="order-footer-right">
        <x-button type="primary" :mini="true">支付</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import XButton from './OrangeButton'
// import XButton from 'vux/Button'
import Flexbox from 'vux/Flexbox'
import FlexboxItem from 'vux/Flexbox-item'

export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  components: {
    XButton,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style>
.order-container {
  background-color: #fff;
  margin-top: 15px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
}
.order-container .order-content {
  overflow: hidden;
  zoom: 1;
  font-size: 13px;
}
.order-title {
  border-bottom: 1px solid #dfdfdf;
  padding: 5px;
  font-size: 13px;
}
.order-title .order-label {
  color: #777;
}
.order-content {
  border-bottom: 1px solid #dfdfdf;
  padding: 5px;
}
.order-footer {
  padding: 5px;
  font-size: 13px;
  height: 26px;
}
.order-footer-left {
  color: red;
  display: inline-block;
  float: left;
  padding-top: 3px;
}
.order-footer-right {
  display: inline-block;
  float: right;
}
.order-content-body, .order-content-left, .order-content-right {
  display: table-cell;
  vertical-align: top;
}
.order-content-body {
  overflow: hidden;
  zoom: 1;
  padding-left: 5px;
}
.order-content-right {
  text-align: right;
  padding-left: 10px;
}
.media-object {
    display: block;
}
</style>
