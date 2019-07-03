<template>
  <div id="index">
    <el-row class="header">
      <router-link to="/" tag="div"><img src="../../assets/brand.png" class="header-logo"></router-link>
      <ul class="header-operations" v-popover:popover>
        <el-popover
          ref="popover"
          placement="bottom"
          width="100"
          trigger="hover">
          <ul style="list-style-type: none;">
            <li><el-button type="text" @click="infoDialog" style="padding-left: 10px">个人资料</el-button></li>
           <!--  <li><el-button type="text" @click="pwdDialog" style="padding-left: 10px">修改密码</el-button></li>
            <li><el-button type="text" @click="logout" style="padding-left: 10px">退出系统</el-button></li> -->
          </ul>
        </el-popover>
        <li><img :src="user.photo" class="img-circle"></li>
        <li class="el-dropdown-link text">
          {{user.name}}
        </li>
      </ul>
    </el-row>
        <el-row class="container">
      <el-col :span="3" class="menu-container">
        <el-menu class="el-menu-vertical-demo" :default-active="index" router unique-opened>
          <el-submenu v-if="item.sub_permission&&item.sub_permission.length" v-for="item in menu"
                      :index="item.id.toString()"
                      :key="item.id">
            <template slot="title">
              <i :class="'fa fa-'+item.ico"></i>{{item.title}}
            </template>
            <el-menu-item-group style="margin-top: -14px;">
              <el-menu-item
                v-for='child in item.sub_permission'
                :index="child.route"
                :key="child.id">{{child.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-if="!(item.sub_permission&&item.sub_permission.length)" v-for="item in menu"
                        :index="item.id.toString()"
                        :key="item.id"><i :class="'fa fa-'+item.ico"></i>{{item.title}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="content-container">
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
      </el-col>
    </el-row>
    <el-dialog class="dialog" title="个人资料" :visible.sync="dialogFormVisible" width="30%">
      <personal-data :infoForm="infoForm" @child-say1="listenToMyBoy" @showQrCode="showQrcode">
      </personal-data>
    </el-dialog>
   </div>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex'
   import personalData from './children/personal-data'
   import editPwd from './children/edit-pwd'
   import * as rootController from '../../api/rootController'
   export default {
      components: { personalData, editPwd },
      data() {
        return {
          index: '/',
          dialogFormVisible: false,
          user: {},
          infoForm: {},
        }
      },
      computed: mapGetters([
           'menu'
        ]),
      created() {
         let self = this
         self.getUserInfo()
      },
      methods: {
        infoDialog() {
        let self = this
        self.dialogFormVisible = true
        self.infoForm = Object.assign({}, self.user)
        self.$set(self.infoForm,'pwd',sessionStorage.getItem('pwd'))
        },
        getUserInfo() {
          let self = this
          rootController.getUserInfo().then((data) => {
              let userinfo = data
              if (userinfo.photo) {
                console.log(userinfo.photo)
              } else {
                userinfo.photo = '/static/no-photo.jpg'
              }
              self.user = userinfo
          }).catch((e) => {
             console.error(e)
          })
        }
      }
   }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #index
    height 100%
    .header
      height 80px
      position absolute
      width 100%
      top 0
      left 0
      padding 0 20px
      z-index 1
      box-sizing border-box
      background-color rgb(32, 160, 255)
      .header-logo
        height 100%
        margin-top 15px
        cursor pointer
      .header-operations
        position absolute
        display inline-block
        margin 0
        height 100%
        list-style none outside none
        top 0
        right 30px
        li
          color #fffF
          display inline-block
          vertical-align middle
          padding 0
          margin 0 10px
          line-height 80px
          cursor pointer
          .img-circle
            border-radius 50%
            width 50px
            height 50px
            vertical-align middle
          &.text
            font-size 20px
    .container
      height 100%
      padding-top 80px
      .menu-container
        height 100%
        &:before
          content: "";
          width: 12.5%;
          position: fixed;
          bottom: 0;
          top: 0;
          z-index: -1;
          background-color: #EEF1F6;
        .el-menu
          height 100%
          font-size 50px
          .el-menu-item
            min-width 0
          .fa
            margin-right 8px
      .content-container
        height 100%
        padding 25px
        overflow-y scroll
    .dialog
      .avator-item
        text-align center
        .upload
          display block
          position absolute
          top 50%
          left 50%
          width 100px
          height 100px
          margin-top -68px
          margin-left -50px
          opacity 0
          z-index 10
        .avator
          display block
          margin-left auto
          margin-right auto
          text-align center
          width 100px
          height 100px
          border-radius: 50%
          background-position center
          background-size cover
          background-repeat no-repeat
          border 1px solid #EFF2F7
          .layer
            display none
            background-color #1F2D3D
            opacity 0.5
            height inherit
            width inherit
            border-radius 50%
            line-height 7em
            .text
              color #FFFFFF
          &:hover
            .layer
              display table
        .tip
          margin-top 10px
          color #8492A6
      .button-item
        text-align center
    .qr-dialog
      text-align center
      .icon
        font-size 100px
</style>
