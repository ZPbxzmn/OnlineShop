<template>
    <el-container>
        <el-header>
            <el-steps :active="active" finish-status="success" align-center>
                <el-step title="填写账号信息"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </el-header>
        <el-main>
            <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <template v-if="this.active===0">
                    <div class="content">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="ruleForm2.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="phoneNumber">
                            <el-input v-model="ruleForm2.phoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input v-model="ruleForm2.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            <router-link to="/">
                                    <el-button round class="toIndex" >返回首页</el-button>
                                </router-link>
                        </el-form-item>
                    </div>
                </template>
                <template v-if="active===2">
                    <div class="content">
                        <div class="success">
                            <h2><i class="el-icon-circle-check"> 恭喜注册成功，您的账号为：</i></h2>
                            <p>登录名：<span>{{ruleForm2.name}}</span></p>
                            <p>手机号：<span>{{ruleForm2.phoneNumber}}</span></p>
                        </div>
                        <el-row class="btn">
                            <el-col :span="6" :offset="2">
                                <router-link to="/login">
                                    <el-button type="success" round>立即登录</el-button>
                                </router-link>
                            </el-col>
                            <el-col :span="10" :offset="0">
                                <router-link to="/">
                                    <el-button round class="toIndex" >返回首页</el-button>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                </template>
            </el-form>
        </el-main>
        <Bottom></Bottom>
    </el-container>
</template>

<script>
import Bottom from './Bottom'
export default {
  components: {
    Bottom
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      active: 0,
      ruleForm2: {
        name: '',
        phoneNumber: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.active += 2
          this.$store.dispatch('addUser', {'username': this.ruleForm2.name, 'password': this.ruleForm2.pass, 'phoneNumber': this.ruleForm2.phoneNumber, 'address': this.$store.state.users[0].address})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-header{
    padding: 0 200px;
}
.el-steps{
    margin-top: 40px;
}
.content{
    width: 450px;
    margin: 50px auto;
}
.form-label{
    line-height: 40px;
    text-align: right;
}
.success{
    padding-left: 50px;
}
i{
    color: #67C23A;;
}
p{
    padding: 10px 0 0 20px;
}
.toIndex{
    background-color: #ff0036;
    color: #fff;
    margin-left: 100px;
}
.btn{
    margin-top: 100px;
}
</style>
