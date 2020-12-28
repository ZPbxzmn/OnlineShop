<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <el-input v-model="username" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4" :offset="1">
                <el-input v-model="password" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="2" :offset="1">
                <el-button type="primary" @click="login">登录</el-button>
            </el-col>
            <el-col :span="2" :offset="1">
                <el-button type="primary" @click="logoff">注销</el-button>
            </el-col>
        </el-row>
        <el-row v-for="(item,index) in userList" :key="index">
          {{item.username}}
          <br>
        </el-row>
        <el-row>{{this.$store.state.users}}</el-row>
        <el-row>
            {{username}}--{{password}}
        </el-row>
        <el-row>
            {{flag}}--Hi {{this.$store.state.activeUser}}
        </el-row>
        <el-row>
            {{this.$store.state}}
        </el-row>
    </div>
</template>

<script>
import mock from '@/mock/mock.js'
import axios from 'axios'
export default {
  data () {
    return {
      userList: {},
      username: '',
      password: '',
      flag: false
    }
  },
  methods: {
    login () {
      for (let user of this.$store.state.users) {
        if (this.username === user.username && this.password === user.password) {
          this.flag = true
          this.$store.state.activeUser = this.username
          break
        } else {
          this.flag = false
        }
      }
    },
    logoff () {
      this.$store.state.activeUser = ''
    }
  },
  mounted () {
    axios.get('http://localhost:8080/data').then(res => {
      this.userList = res.data.users
      console.log('读取users')
    })
  }
}
</script>

<style scoped>

</style>
