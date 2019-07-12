<template>
   <el-row :gutter="12">
      <el-col :span="8">
      </el-col>
   </el-row>
</template>
<script>
    import * as rootController from '../../../api/rootController'
	export default {
		props: ['initalAttribute'],
		data() {
			return {
               attribute: this.initalAttribute
			}
		},
		beforeCreate: () => {
           rootController.getAttribute()
           .then((res) => {
              console.log(res);
           })
		},
		methods: {

		}
	}
</script>