<template>
  <div>
    <title-bar title="预约语伴"></title-bar>

    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" style="height:200px;" @pullup:loading="load2">
    <notice-title>如需预约线下授课，请联系客服。微信号 iYuban</notice-title>
        <div class="box2">
          <p v-for="i in n2">占位 {{i}}</p>
        </div>
    </scroller>

  </div>
</template>

<script>
import Scroller from 'vux/scroller/'
import Divider from 'vux/divider/'
import Spinner from 'vux/spinner/'
import TitleBar from './components/TitleBar'
import NoticeTitle from './components/NoticeTitle'

export default {
  components: {
    Scroller,
    Divider,
    Spinner,
    TitleBar,
    NoticeTitle
  },
  methods: {
    load1: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.n1 += 10
        setTimeout(function () {
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    },
    load2: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.n2 += 10
        setTimeout(function () {
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    },
    load3: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.n3 += 10
        setTimeout(function () {
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    }
  },
  data () {
    return {
      pullupStatus: 'default',
      n1: 10,
      n2: 10,
      n3: 10,
      pullupConfig2: {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中'
      }
    }
  }
}
</script>
