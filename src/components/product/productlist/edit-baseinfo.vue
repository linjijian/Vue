<template>
	<el-form
    size='small'
    :model='product'
    label-width='74px'
    label-position='left'
    ref=' baseproductForm'
	>
	   <el-row>
	   	  <el-form-item label='品名' prop='name'>
            <el-input v-model='product.name'></el-input>
          </el-form-item>
	   </el-row>
	   <el-row>
	   	  <el-form-item label='MFN' prop='name'>
            <el-input v-model='product.name' placeholder='MFN'></el-input>
          </el-form-item>
	   </el-row>
	</el-form>
</template>
<script>
    export default{
       data() {
         return {
         	product: {}
         }
       }
    }
</script>
<style type="text/css">
</style>