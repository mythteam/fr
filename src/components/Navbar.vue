<template>
    <tab>
        <tab-item :selected="tab === item" v-for="item in tabs" @click="tab = item">
            {{item}}
        </tab-item>
    </tab>
</template>
<script>
    import {Tab, TabItem, Sticky} from './vux/src/components'
    export default{
        data(){
            return{
                tab: '首页',
                tabs: ['首页', '语伴', '订单', '我的']
            }
        },
        components:{
            Tab,
            TabItem,
            Sticky
        }
    }
</script>
