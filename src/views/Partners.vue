<template>
  <div>
    <title-bar title="预约语伴"></title-bar>
    <notice-title>如需预约线下授课，请联系客服。微信号 iYuban</notice-title>
    <scroller
      lock-x
      scrollbar-y

      use-pullup
      :pullup-config="pullupConfig"
      @pullup:loading="loadMore"

      use-pulldown
      :pulldown-config={content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}
      @pulldown:loading="refresh"

      :style="{height: height + 'px'}"
      class="font-sm">

        <!--content slot-->
        <div class="box2">
          <partner-item v-for="partner in partners" :user="partner"></partner-item>
        </div>
    </scroller>
  </div>
</template>
<script>
import TitleBar from '../components/TitleBar'
import NoticeTitle from '../components/NoticeTitle'
import PartnerItem from './PartnerItem'
import Scroller from 'vux/scroller/'

export default {
  data() {
    return {
      height: 300,
      pullupStatus: 'default',
      pullupConfig: {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中...'
      },
      count: 8,
      partners: [
        {name: 'light1'},
        {name: 'light2'},
        {name: 'light3'},
        {name: 'light4'},
        {name: 'light5'},
        {name: 'light6'},
        {name: 'light7'},
      ]
    };
  },
  methods: {
    loadMore(uuid) {
      console.log(uuid);
      var _this = this;
      setTimeout(function () {
        _this.partners.push({name: 'light' + _this.count});
        setTimeout(function () {
          _this.count++;
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    },
    refresh(uuid) {
      console.log(uuid);
      var _this = this;
      setTimeout(function () {
        _this.partners.unshift({name: 'light' + _this.count});
        setTimeout(function () {
          _this.count++;
          _this.$broadcast('pulldown:reset', uuid)
        }, 10)
      }, 2000)
    }
  },
  components: {
    TitleBar,
    Scroller,
    PartnerItem,
    NoticeTitle
  },
  ready() {
    //calculate height
    var _title = this.$el.querySelector('.yb-notic-title').offsetHeight;
    this.height = window.screen.height - 82 - _title;
  }
}
</script>

<style>
  .font-sm {
    font-size: 0.8em;
  }
</style>
