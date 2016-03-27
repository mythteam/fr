<template>
<div>
  <title-bar title="个人中心"></title-bar>
  <div>
    <group>
      <cell title="账号" value="15210345947"></cell>
    </group>
    <group>
      <cell title="关于我们" link="test"></cell>
      <cell title="联系客服" value="QQ/微信 1802848905"></cell>
    </group>
    <group>
      <cell title="退出登录" link="logout"></cell>
    </group>
  </div>
</div>
</template>

<script>
import TitleBar from '../components/TitleBar'
import Group from 'vux/Group'
import Cell from 'vux/Cell'

export default {
  components: {
    TitleBar,
    Group,
    Cell
  }
}
</script>
