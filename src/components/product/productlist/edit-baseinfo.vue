<template>
	<el-form
    size='small'
    :model='product'
    label-width='74px'
    label-position='left'
    ref='baseproductForm'
    :rules='rules'
    id="baseForm"
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
	   	  <el-form-item label='MFN' prop='mfn'>
            <el-input v-model='product.mfn' placeholder='MFN'  :disabled="mfndisable"></el-input>
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
          <el-form-item prop='length'>
           <el-input placeholder="请输入长" v-model="product.length">
            <template slot="prepend">长</template>
           </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop='width'>
            <el-input placeholder="请输入宽" v-model="product.width">
            <template slot="prepend">宽</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop='height'>
            <el-input placeholder="请输入高" v-model="product.height">
            <template slot="prepend">高</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label='重量(KG)' prop='weight'>
            <el-input v-model='product.weight' autocomplete='off'></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="2">
         <el-button native-type="submit" type="primary" @click.prevent="saveBaseinfo">保存</el-button>
      </el-col>
    </el-row>
    <br>
    <br>
	</el-form>
</template>
<script>
    import * as rootController from '../../../api/rootController'
    export default{
       props: ['initalProduct', 'mfndisable'],
       data() {
        var validateNumberTwo = (rule, value, callback) => {
            let numtwo = /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/
            if (!value) {
               callback()
            }
            if (numtwo.test(value)) {
              callback();
            } else {
              callback(new Error('只能输入整数或保留两位小数'))
            }
          }
         return {
          rules: {
            name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
            height: [{ validator: validateNumberTwo, trigger: 'blur' }],
            length: [{ validator: validateNumberTwo, trigger: 'blur' }],
            width: [{ validator: validateNumberTwo, trigger: 'blur' }],
            weight: [{ validator: validateNumberTwo, trigger: 'blur' }]
          }
         }
       },
       computed: {
         product() {
           return this.initalProduct
         }
       },
       methods: {
          saveBaseinfo() {
             let self = this
             self.$refs['baseproductForm'].validate(valid => {
                if (valid) {
                   let baseformdata = new FormData()
                   Object.keys(self.product).forEach((key) => {
                     baseformdata.append(key, self.product[key])
                   })
                   console.log(self.product.name)
                 rootController.saveProductBaseInfo(baseformdata)
                  .then((res) => {
                     this.$emit('basesuccess')
                  })
                }
             })
          }
       }
    }
</script>
<style type="text/css">
  .primarybutton{
    margin-left:20px;
  }
</style>