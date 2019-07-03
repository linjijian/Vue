<template>
  <el-form :model="pwdForm" label-position="left">
    <el-form-item label-width="80px" label="新密码">
      <el-tooltip effect="dark" content="请输入6-20个字母、数字、下划线" placement="top-start">
        <el-input type="password" v-model="pwdForm.pwd1"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label-width="80px" label="确认密码">
      <el-input type="password" v-model="pwdForm.pwd2"></el-input>
    </el-form-item>
    <el-form-item class="button-item">
      <el-button native-type="submit" size="large" type="success" @click.prevent="savePwd">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script type="text/ecmascript-6">
  import * as rootController from '../../../api/rootController'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        pwdForm: {
          pwd1: '',
          pwd2: ''
        }
      }
    },
    computed: mapGetters([
      'PR'
    ]),
    methods: {
      savePwd() {
        let self = this
        let pwd
        if (self.pwdForm.pwd1 != self.pwdForm.pwd2) {
          return self.$notify({
            message: '两次输入密码不一致',
            type: 'warning'
          })
        } else {
          pwd = self.pwdForm.pwd1
        }
        // rootController.savePwd({
        //   password: pwd
        // }).then(() => {
        //   this.$router.push({ path: '/login' })
        //   this.$emit('child-say2', false)
        // })
      }
    }
  }
</script>