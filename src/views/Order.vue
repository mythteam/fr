<template>
  <div>
    <title-bar title="我的订单"></title-bar>
    <sticky>
    <tab :line-width=1>
      <tab-item :selected="tab === 'progress'" @click="switchPage('progress')">进行中</tab-item>
      <tab-item :selected="tab === 'finished'" @click="switchPage('finished')">已完成</tab-item>
      <tab-item :selected="tab === 'canceled'" @click="switchPage('canceled')">已取消</tab-item>
    </tab>
    </sticky>
    <order-item v-for="order in orders" :order="order"></order-item>
  </div>
</template>
<script>
import TitleBar from '../components/TitleBar'
import Sticky from 'vux/sticky/index.vue'
import Tab from 'vux/Tab'
import TabItem from 'vux/Tab-item'
import OrderItem from '../components/OrderItem'

export default {
  data() {
    return {
      tab: 'progress',
      orders: [
        {title: 'cx'},
        {title: 'cx'},
        {title: 'cx'},
        {title: 'cx'}
      ]
    };
  },
  methods: {
    switchPage(tab) {
      this.tab = tab;
    }
  },
  components: {
    TitleBar,
    Sticky,
    Tab,
    TabItem,
    OrderItem
  }
}
</script>
