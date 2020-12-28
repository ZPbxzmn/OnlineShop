<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    name: state => state.name
  })
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
