<template>
	<div class="stockmain">
       <h3>采购单</h3>
       <el-form
        size='mini'
        :model='stockmain'
        label-width='74px'
        label-position='left'
        ref='stockmainForm'
        id="stockmainForm"
        >
       	    <el-row>
                <el-col :span="8">
	   	          <el-form-item label='单号' prop='id'>
                  <el-input v-model='stockmain.id' :disabled="true"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="3">
	   	          <el-form-item label='合同号' prop='id'>
                  <el-input v-model='stockmain.id'></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
	   	          <el-form-item label='流程' prop='id'>
                  <el-input v-model='stockmain.id' :disabled="true"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" :offset="3">
	   	          <el-form-item label='QC' prop='id'>
                  <el-input v-model='stockmain.id' :disabled="true"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" :offset="2">
	   	          <el-form-item label='发货状态' prop='id'>
                  <el-input v-model='stockmain.id' :disabled="true"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
       </el-form>
	</div>
</template>
<script>
  export default{
  	data() {
  		return {
  			stockmain: { }
  		}
  	}
  }
</script>