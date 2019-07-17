<template>
   <div>
	  <el-card class="attcard" v-for="attribute in attributelist">
	  	<div slot="header" class="attribute">
           <el-checkbox v-model="checked">{{attribute.name}}</el-checkbox>
	  	</div>	
	  </el-card>
   </div>
</template>
<script>
    import * as rootController from '../../../api/rootController'
	export default {
		props: ['initalAttribute'],
		data() {
			return {
               checked: '',
               attributelist: this.initalAttribute
			}
		},
		beforeCreate: () => {
          
		},
		methods: {

		}
	}
</script>