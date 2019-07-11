<template>
   <el-row :gutter="12">
      <el-col :span="8" v-for="">
      </el-col>
   </el-row>	
</template>
<script>
	export default {
		props: ['initalAttribute'],
		data() {
			return {
               attribute:this.initalAttribute
			}
		}
	}
</script>