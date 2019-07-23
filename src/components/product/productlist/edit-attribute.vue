<template>
   <div>
   	 <el-row>
   	 	<el-col :span="7" v-for="(attribute,index) in attributelist.ext" :key="attribute.id" :offset="1" style="margin-bottom:20px;">
           	<el-card class="attcard">
	  	      <div slot="header" class="attbute">
              <el-checkbox v-model="attribute.on" @change="changeCheckbox(index)">{{attribute.name}}</el-checkbox>
	  	      </div>
              <div v-show="attribute.on" v-for="attbudetail in attribute.sub" :key="attbudetail.id">
                <el-form
                 size="mini"
                >
                  <el-form-item :label='attbudetail.name' size="mini">
                  <el-input v-model='attbudetail.dat' width="100px"></el-input>
                  </el-form-item>
                </el-form>
              </div>
	        </el-card>
   	 	</el-col>
   	 </el-row>
     <el-row>
      <el-col :span="6" :offset="2">
         <el-button  type="primary" @click.prevent="saveProductAttinfo">保存</el-button>
      </el-col>
     </el-row>
   </div>
</template>
<script>
    import * as rootController from '../../../api/rootController'
	export default {
		props: ['initalAttribute'],
		data() {
			return {
               checked: '',
			}
		},
		computed: {
			attributelist() {
				return this.initalAttribute
			}
		},
		methods: {
      saveProductAttinfo() {
        let productAttribute = {}
        productAttribute.ext = this.attributelist.ext
        productAttribute.mfn = this.attributelist.mfn
        rootController.saveProductAttribute(productAttribute)
        .then((res) => {
           this.$emit('attsuccess')
        }).catch((err) => {
           console.log(err)
        })
      },
      changeCheckbox(index) {
        console.log(this.attributelist.ext[index].on)
      }
		}
	}
</script>
<style scoped>
  .attcard {
    background-color: rgba(0,0,0,0.1)
  }
</style>