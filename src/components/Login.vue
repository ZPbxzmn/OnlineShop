<template>
    <el-container>
        <el-header height="90px">
            <div class="h-img">
                <router-link to="/">
                    <img src="@/assets/首页/cat2.png">
                </router-link>
            </div>
        </el-header>
        <el-main class="content">
            <div class="inner">
                <img src="@/assets/else/login-bg.jpg">
                <router-link to="/" class="img-a">
                </router-link>
            </div>
            <div class="login">
                <div class="login-h">密码登录</div>
                <el-form :model="ruleForm1" status-icon ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                    <div class="icon-name"><i class="el-icon-user-solid"></i></div>
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm1.name" autocomplete="off" placeholder="用户名/手机号"></el-input>
                    </el-form-item>
                    <div class="icon-pass"><i class="el-icon-lock"></i></div>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm1.pass" autocomplete="off" placeholder="请输入登录密码"></el-input>
                    </el-form-item>
                    <el-button class="login-btn" @click="login">登录</el-button>
                </el-form>
                <p class="toRegister"><router-link to="/register">免费注册</router-link></p>
            </div>
        </el-main>
        <Bottom></Bottom>
    </el-container>
</template>

<script>
import Bottom from './Bottom'
import axios from 'axios'
export default {
  components: {
    Bottom
  },
  data () {
    return {
      userList: {},
      flag: false,
      ruleForm1: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    login () {
      for (let user of this.$store.state.users) {
        if (this.ruleForm1.name === user.username && this.ruleForm1.pass === user.password) {
          this.$store.state.activeUser = this.ruleForm1.name
          this.$store.state.activeAddress = user.address
          this.flag = true
          this.$router.push('/')
          break
        }
      }
      if (!this.flag) {
        this.$message.error('用户名或密码错误!')
      }
    }
  }
}
</script>

<style scoped>
.h-img{
    margin: 30px 0 0 15%;
}
.content{
    padding: 0;
    background-color: rgb(247, 126, 19);
}
.inner img{
    display: block;
    margin: 0 auto;
}
.img-a{
    display: block;
    width: 630px;
    height: 440px;
    position: absolute;
    top: 170px;
    left: 235px;
}
.login{
  background-color: #fff;
  width: 310px;
  height: 340px;
  position: absolute;
  top: 200px;
  left: 900px;
  padding: 30px 20px;
}
.icon-name{
    position: absolute;
    left: 30px;
    top: 69px;
}
.icon-pass{
    position: absolute;
    left: 30px;
    top: 134px;
}
.login-h{
    font-size: 16px;
    color: #3c3c3c;
    font-weight: 700;
    padding: 0  0 10px 10px;
}
.login-btn{
    width: 100%;
    background-color: #ff0036;
    color: #fff;
    font-size: 16px;
}
.toRegister{
    text-align: right;
    color: #6c6c6c;
    font-size: 12px;
    line-height: 35px;
}
a{
    text-decoration: none;
}
a:visited{
    color: #6c6c6c;
}
</style>
