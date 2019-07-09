<template>
	<el-form
    size='small'
    :model='product'
    label-width='74px'
    label-position='left'
    ref=' baseproductForm'
	>
	   <el-row>
      <el-col :span="12">
	   	  <el-form-item label='品名' prop='name'>
          <el-input v-model='product.name'></el-input>
        </el-form-item>
      </el-col>
	   </el-row>
	   <el-row>
      <el-col :span="8">
	   	  <el-form-item label='MFN' prop='MFN'>
            <el-input v-model='product.mfn' placeholder='MFN'></el-input>
        </el-form-item>
      </el-col>
	  </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label='品类' prop='cat'>
            <el-input v-model='product.cat'></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label='主色' prop='clr'>
            <el-input v-model='product.clr'></el-input>
        </el-form-item>
    </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label='主材质' prop='mat'>
            <el-input v-model='product.mat'></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-form-item label='尺寸(CM)'>
        <el-col :span="5">
          <el-input placeholder="请输入内容" v-model="product.length">
           <template slot="prepend">长</template>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入内容" v-model="product.width">
           <template slot="prepend">宽</template>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入内容" v-model="product.height">
           <template slot="prepend">高</template>
          </el-input>
        </el-col>
      </el-form-item>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label='重量(KG)' prop='mat'>
            <el-input v-model='product.weight'></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="2">
         <el-button native-type="submit" type="primary" @click.prevent="">保存</el-button>
      </el-col>
    </el-row>
    <br>
    <br>
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
  .primarybutton{
    margin-left:20px;
  }
</style>