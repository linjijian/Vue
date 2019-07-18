<template>
   <div>
   	 <el-row>
   	 	<el-col :span="7" v-for="(attribute,index) in attributelist" :key="attribute.id" :offset="1" style="margin-bottom:20px;">
           	<el-card class="attcard">
	  	      <div slot="header" class="attbute">
              <el-checkbox v-model="attribute.pid" @change="getAttributeDetail(attribute._id,index)">{{attribute.name}}</el-checkbox>
	  	      </div>
              <div v-if="attribute.pid" v-for="attbudetail in attribute.sub">
              	  <label :for="attbudetail._id">{{attbudetail.name}}</label>
                  <input type="radio" name="attbudetail.name" id="attbudetail._id" />
              </div>
	        </el-card>
   	 	</el-col>
   	 </el-row>
     <el-row>
      <el-col :span="6" :offset="2">
         <el-button  type="primary" @click.prevent="saveBaseinfo">保存</el-button>
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
           getAttributeDetail(pid,index) {
            rootController.getAttbuDetail({_id:pid})
             .then((data) => {
             	this.$set(this.attributelist[index], sub, data.sub) 
             }).catch((err) => {
             	console.log(err)
             })
           }
		}
	}
</script>