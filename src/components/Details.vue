<template>
  <div>
    <Top></Top>
    <Detail1></Detail1>
    <Detail2></Detail2>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Top'
import Bottom from './Bottom'
import Detail1 from './Details1.vue'
import Detail2 from './Details2.vue'
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  components: {
    Top,
    Bottom,
    Detail1,
    Detail2
  },
  created () {
    if (this.$store.state.activeGoods !== this.$store.state.goodsList[this.$route.params.name]) {
      this.$store.state.activeGoods = this.$store.state.goodsList[this.$route.params.name]
      console.log('更改activeGoods')
    } else {
      console.log('不用更改activeGoods')
    }
  }
}
</script>

<style scoped>
</style>
