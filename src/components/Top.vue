<template>
  <el-container>
    <el-header height="40px">
      <el-row>
        <el-col :span="6" :offset="2">
          <p>
            <span v-if="!this.$store.state.activeUser">
              <span>喵，欢迎来天猫</span>
              <router-link to="/login" id="login">请登录</router-link>
              <router-link to="/register" class="nav-padding">免费注册</router-link>
            </span>
            <span v-if="this.$store.state.activeUser">
              <span class="hi"> Hi {{this.$store.state.activeUser}}</span>
              <a  class="nav-padding" @click="logoff">退出</a>
            </span>
          </p>
        </el-col>
        <el-col :span="6" :offset="9">
          <p>
            <a @click="toHomePage" class="nav-padding" to="/">商城首页</a>
            <a href="" class="nav-padding"
              ><i class="el-icon-s-custom"></i> 个人中心</a
            >
            <a class="nav-padding" @click="toCart"
              ><i class="el-icon-shopping-cart-2"></i> 购物车<span v-if="this.$store.state.activeUser"> {{this.$store.state.activeCart.length}} 件</span></a
            >
            <a href="" class="nav-padding"
              ><i class="el-icon-star-on"></i> 收藏夹</a
            >
          </p>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="4" :offset="1">
          <a @click="toHomePage"><img src="@/assets/首页/1212logo.gif" class="img"></a>
        </el-col>
        <el-col :span="10" :offset="2" class="search">
            <div class="search-bd">
                <el-input placeholder="搜索 天猫 商品/品牌/店铺" v-model="value">
                    <template slot="append">
                        <router-link :to="'/search/'+value">
                          <button class="search-button">搜 索</button>
                        </router-link>
                    </template>
                </el-input>
            </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    logoff () {
      this.$store.state.activeCart = []
      this.$store.state.activePay = []
      this.$store.state.activeUser = ''
      this.$router.push('/login')
    },
    toHomePage () {
      this.$store.state.activePay = []
      this.$router.push('/')
    },
    toCart () {
      if (Object.keys(this.$store.state.activeUser).length !== 0) {
        this.$router.push('/cart')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
a:link,
a:visited {
  color: #999;
}
a:hover {
  color: #ff0036;
}
i {
  color: #ff0036;
  font-size: 13px;
}
.el-header {
  background-color: #f2f2f2;
  border-bottom-color: transparent !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
}
.el-header p {
  font: 12px/1.5 tahoma, arial, "\5b8b\4f53";
  color: #999;
  height: 32px;
  line-height: 32px;
}
.nav-padding {
  padding: 0 10px;
}
#login {
  padding-left: 20px;
}
.search-bd{
    border: 2px solid #ff0036;
    border-right: none;
}
.el-main{
    padding-top: 3px;
    padding-left: 40px;
}
.search-button{
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #ff0036;
  border: 0;
  outline: none;
}
.search{
  margin-top: 37px;
}
.img{
  width: 290px;
  height: 130px;
}
.hi{
  padding-left: 50px;
}
</style>

<style>
.search-bd .el-input__inner {
  border: none;
}
.el-input-group__append{
  border: none;
  background-color:#ff0036;
  padding: 0 30px;
}
</style>
