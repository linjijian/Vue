<template>
  <div id="login">
    <div class="form">
      <!--<div class="text-center">-->
        <!--<img src="../../assets/logo.png"/>-->
      <!--</div>-->
      <el-form :model="LoginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" label-width="50px">
          <el-input v-model="LoginForm.account" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="50px">
          <el-input type="password" v-model.number="LoginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button native-type="submit" class="button" type="primary" size="large" @click.prevent="submitForm('LoginForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import * as rootController from '../../api/rootController'

export default {
	data() {
	    return {
			LoginForm: {
          		account: '',
          		password: ''
        	}
		}
	},
	methods: {
		submitForm(formName) {
          let self = this
          let myReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i
          if (!(myReg.test(self.LoginForm.account))) {
          	return self.$message.error('请输入正确的邮箱!')
          }
          if (!self.LoginForm.password) {
          	return self.$message.error('请输入密码！')
          }
          rootController.login({
            account: self.LoginForm.account,
            pwd: self.LoginForm.password
          }).then((res) => {
             self.$router.push({ path: '/' })
          }).catch((e) => {
            console.error(e)
          })
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $login-width = 380px
  $login-height = 380px

  #login
    position relative
    height 100%
    background url('../../assets/body-bg.jpg')
    background-repeat no-repeat
    background-size cover
    background-attachment fixed
    .form
      position absolute
      top 50%
      left 50%
      width $login-width
      height $login-height
      margin-top -($login-height / 2)
      margin-left -($login-width / 2)
      text-align center
      img
        width 280px
      .el-form
        background #fff
        padding 50px
        margin-top 20px
        border-radius 10px
        button
          width 300px
          margin-top 20px
</style>
