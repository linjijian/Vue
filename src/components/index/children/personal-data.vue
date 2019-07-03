<template>
  <div id="personal-data">
    <el-form :model="infoForm"
             ref="ruleForm"
             :rules="rules"
             label-position="left">
<!--       <el-form-item class="avator-item">
        <div class="avator" :style="{backgroundImage: 'url(' + infoForm.photo + ')'}">
          <div class="layer">
            <span class="text">编辑</span>
          </div>
          <input type="file" @change="onFileChange" class="upload">
        </div>
        <span class="tip">只能上传jpg/png文件，且不超过1mb</span>
      </el-form-item> -->
      <el-form-item
        label-width="80px"
        label="账号"
        prop="account">
        <el-input v-model="infoForm.account"></el-input>
      </el-form-item>
      <el-form-item label-width="80px" label="姓名">
        <el-input v-model="infoForm.name"></el-input>
      </el-form-item>
      <el-form-item label-width="80px" label="密码">
         <el-input v-model="infoForm.pwd" show-password></el-input>
      </el-form-item>
      <el-form-item label-width="80px" label="生日">
        <el-date-picker
          v-model="infoForm.birthday"
          type="date"
          placeholder="选择日期"
          :editable="false"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label-width="80px" label="性别">
        <el-radio class="radio" v-model="infoForm.gender" :label=1>男</el-radio>
        <el-radio class="radio" v-model="infoForm.gender" :label=0>女</el-radio>
      </el-form-item>
      <el-form-item class="button-item">
        <el-button native-type="submit" size="large" type="success" @click.prevent="saveInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  import Utils from '../../../config/utils'
  import * as rootController from '../../../api/rootController'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        formData: new FormData(),
        user: {},
        userForm: {},
        rules: {
          account: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
        }
      }
    },
    props: [
      'infoForm'
    ],
    computed: {
      ...mapGetters([
        'imgPrefix'
      ])
    },
    methods: {
      async onFileChange(e) {
        let self = this
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return
        }
        let file = files[0]
        const res = Utils.checkFile(file, /(.*)+\.(jpg|png)$/i, 1024 * 1024)
        if (!res) {
          return
        }
        let base64 = await Utils.createImage(file)
        self.formData.append('avatar', file)
        self.infoForm.photo = base64
      },
      saveInfo() {
        let self = this
        if (!self.infoForm.name) {
          self.infoForm.name = ''
        }

        self.formData.append('account', self.infoForm.account)
        self.formData.append('birthday', Utils.dateFormat(self.infoForm.birthday))
        self.formData.append('gender', self.infoForm.gender)
        self.formData.append('name', self.infoForm.name)
        self.formData.append('pwd', self.infoForm.pwd)
        self.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            rootController.saveUserInfo(self.formData).then((data) => {
                   console.log(data)
            }).catch((e) => {
               console.error(e)
            })
          } else {
            return false;
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #personal-data
    .bind-btn
      margin-left 10px
</style>
