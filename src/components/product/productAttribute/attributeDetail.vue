<template>
	<el-dialog
     class='attributeDetail'
     title="属性设置"
     :show-close='true'
     :visible.sync='visible'
     width='1000px'
	>
        <el-row class="nav">
            <el-breadcrumb separator="/">
        	    <el-breadcrumb-item :to="{path: '/product/productAttribute'}">扩展属性</el-breadcrumb-item>
		  		<el-breadcrumb-item>属性设置</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row >
           <h2 style="margin-left:20px">设置属性</h2>
        </el-row>
        <el-row style="margin-left:40px">
        	<el-col :span="10">
        	<label>属性名</label>
        	<label class="label">{{pareattribute.name}}</label>
        	</el-col>
        	<el-col :span="10">
        	<label>字段</label>
        	<label class="label">{{pareattribute.id}}</label>
        	</el-col>
        </el-row>
        <el-row style="margin:40px 20px 0 20px">
        <el-form
        size='small'
        :model='attribute'
        label-width='74px'
        label-position='left'
        ref='attribute'
        id="attribute"
        :rules='rules'
        >
        <el-row :gutter="40">
          <el-col :span="10">
            <el-form-item label='名称' prop='name'>
            <el-input v-model='attribute.name'></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="6">
          <el-button type="primary" size="small" @click="addAttributedetail">添加属性</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="10">
            <el-form-item label='字段' prop='id'>
            <el-input v-model='attribute.id'></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="6">
          <el-button type="primary" size="small" @click="emptyAttribute">重置</el-button>
          </el-col>
        </el-row>
        </el-form>
        </el-row>
        <el-row class="table" style="margin:60px 20px 0 20px" :span="16">
          <el-table
           :stripe="true"
           :border="true"
           :data="attbudetlist"
            ref="AttributeTable"
           :header-cell-style="{
		       'text-align':'center',
		       'font-size' :'18px'
           }"
           :cell-style="{
		       'text-align': 'center',
           }"
          >
          <el-table-column label="属性" width="180"
          prop="name"
          >
          </el-table-column>
          <el-table-column label="字段名" width="360"
          prop="id"
          >
          </el-table-column>
          </el-table>
	   </el-row>
    </el-dialog>
</template>
<script>
    import * as rootController from '../../../api/rootController'
    export default {
    	data() {
         var validateFirletter = (rule, value, callback) => {
         let Firletter = /^[a-zA-Z][a-zA-Z0-9_]*$/
         if (!value) {
           callback(new Error('请输入属性字段名'))
         } else if (Firletter.test(value)) {
          callback()
         } else {
          callback(new Error('请输入以字母开头，字母数字下划线组成的字段名'))
         }
         }
         return {
          	visible: false,
          	pareattribute: {},
          	attribute: {},
          	attbudetlist: [],
            rules: {
            name: [{ required: true, message: '请输入属性名称', trigger: 'blur' }],
            id: [{ validator: validateFirletter, trigger: 'blur' }]
            }
          }
    	},
    	methods: {
    	  getAttributeDetail(formdata) {
             rootController.getAttbuDetail(formdata)
             .then((data) => {
             	console.log(data)
             	this.attbudetlist = data.sub
             }).catch((err) => {
             	console.log(err)
             })
    	  },
    	  show(parentdata) {
    	  	let self = this
    	  	if (parentdata) {
    	  		self.visible = true
    	  		self.pareattribute = parentdata
    	  		let pformdata = new FormData()
    	  		console.log(self.pareattribute)
    	  		pformdata.append('_id', self.pareattribute._id)
    	  		self.getAttributeDetail(pformdata)
    	  	}
    	  },
         addAttributedetail() {
         let self = this
         self.$refs['attribute'].validate(valid => {
           if (valid) {
             let attriFormdata = new FormData()
             attriFormdata.append('name', self.attribute.name)
             attriFormdata.append('id', self.attribute.id)
             attriFormdata.append('pid', self.pareattribute._id)
             rootController.saveAttribute(attriFormdata)
             .then((res) => {
               self.attribute.pid  = res.pid
               self.attribute.name = null
               self.attribute.id = null
               let pformdata = new FormData()
    	  	   pformdata.append('_id', self.pareattribute._id)
               self.getAttributeDetail(pformdata)
             }).catch((err) => {
               console.log(err)
             })
           }
         })
         },
      emptyAttribute() {
        this.attribute = {}
      },
    	}
    }
</script>
<style >
  .label{
  	margin-left:40px;
  }
</style>