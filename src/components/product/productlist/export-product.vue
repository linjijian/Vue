<template>
	<el-dialog
      title="导出产品"
      :visible.sync="exportVisible"
      width="500px"
	>
	  <el-form
 	   size='small'
 	   :model='exportdata'
 	   label-width='74px'
 	   label-position='left'
 	   ref='exportForm'
 	   id="exportForm"
	  >
	   <el-row>
	   	    <el-col :span="16">
	   	       <el-form-item label='MFN' prop='mfn'>
               <el-input type="textarea" v-model='exportdata.mfnarea' placeholder='输入要导出的产品，一行一个MFN' :rows="8" style="width:350px"></el-input>
               </el-form-item>
            </el-col>
	   </el-row>
	   <el-row>
	   	  <el-col :span="4">
	   	  	<label>导出内容</label>
	   	  </el-col>
	   	  <el-col :span="4" :offset="2">
	   	    <el-checkbox v-model="exportdata.base" label="基础内容"></el-checkbox>
	   	  </el-col>
	   	  <el-col :span="4" :offset="2">
	   	    <el-checkbox v-model="exportdata.album" label="相册图片"></el-checkbox>
	   	  </el-col>
	   	  <el-col :span="4" :offset="2">
	   	    <el-checkbox v-model="exportdata.ext" label="扩展属性"></el-checkbox>
	   	  </el-col>
	   </el-row>
	   <el-row>
	   	  <el-col :span="4" :offset="6">
	   	    <el-checkbox v-model="exportdata.caiji" label="材积"></el-checkbox>
	   	  </el-col>
	   	  <el-col :span="4" :offset="2">
	   	    <el-checkbox v-model="exportdata.baoguan" label="报关资料"></el-checkbox>
	   	  </el-col>
	   	  <el-col :span="4" :offset="2">
	   	    <el-checkbox v-model="exportdata.qg" label="清关资料"></el-checkbox>
	   	  </el-col>
	   </el-row>
	  </el-form>
	  <div slot='footer' class='dialog-footer'>
	  <el-button size='small' native-type='submit'  type='primary' @click="exportexcel">导出</el-button>
      <el-button size='small' @click='hide'>取 消</el-button>
      </div>
	</el-dialog>
</template>
<script>
  import * as rootController from '../../../api/rootController'
  export default {
  	data() {
  		return {
  			exportdata: {
  				mfnarea: '',
  				base: false,
  				album: false,
  				ext: false,
  			},
  			exportVisible: false
  		}
  	},
  	methods: {
  		show() {
          this.exportVisible = true
  		},
  		hide() {
  		  this.exportVisible = false
  		},
  		exportexcel() {
            console.log(Number(this.exportdata.album))
            console.log(this.exportdata.mfnarea.split('\n').join(','))
            let dataexport = {
            	mfn: this.exportdata.mfnarea.split('\n').join(','),
            	token: sessionStorage.getItem('token'),
            	album: Number(this.exportdata.album),
            	ext: Number(this.exportdata.ext),
            	base: Number(this.exportdata.base),
            }
  			// rootController.exportexcel(dataexport)
  			// .then( (response) => {
     //            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
     //                console.log(blob)
				 //     	const downloadElement = document.createElement('a')
				 //     	const href = window.URL.createObjectURL(blob)
				 //     	downloadElement.href = href
				 //     	downloadElement.download = 'excel.xlsx'
				 //     	document.body.appendChild(downloadElement)
				 //     	downloadElement.click()
			  //    		document.body.removeChild(downloadElement) // 下载完成移除元素
				 //     	window.URL.revokeObjectURL(href) // 释放掉blob对象
  			// }).catch(err => {
  			// 	console.log(err)
  			// })
  		}
  	}
  }
</script>