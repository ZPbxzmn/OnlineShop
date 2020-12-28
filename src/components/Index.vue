<template>
    <div>
      <Top></Top>
      <Index1></Index1>
      <Index2></Index2>
      <Bottom></Bottom>
    </div>
</template>

<script>
import Top from './Top'
import Bottom from './Bottom'
import Index1 from './Index1'
import Index2 from './Index2'
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  components: {
    Top,
    Bottom,
    Index1,
    Index2
  },
  mounted () {
    if (Object.keys(this.$store.state.users).length === 0) {
      axios.get('http://localhost:8080/data').then(res => {
        this.$store.state.users = res.data.users
        console.log('读取users')
      })
    } else {
      console.log('不用读取users')
    }
    if (Object.keys(this.$store.state.goodsList).length === 0) {
      axios.get('http://localhost:8080/data').then(res => {
        this.$store.state.goodsList = res.data.goodsList
        console.log('读取goodsList')
      })
    } else {
      console.log('不用读取goodsList')
    }
  }
}
</script>

<style scoped>
</style>
