<template>
   <div class="stockorder">
        <el-row class="nav">
			<el-breadcrumb separator="/">
		  		<el-breadcrumb-item :to="{path: '/'}">采购管理</el-breadcrumb-item>
		  		<el-breadcrumb-item>采购单管理</el-breadcrumb-item>
		 	</el-breadcrumb>
	   </el-row>
       <el-row class="tabs" style="margin-top: 40px;">
          <el-tabs  type="card" :value="tabvalue">
          	<el-tab-pane label="未完成" name="first" class="unfinishstock" tab-click=" ">
          	   <stock-list stockstep="0"></stock-list>
          	</el-tab-pane>
          	<el-tab-pane label="已完成" name="second" class="finishstock" tab-click=" ">
          	   <stock-list stockstep="1"></stock-list>
          	</el-tab-pane>
          </el-tabs>
	   </el-row>
   </div>
</template>
<script>
   import stockList from './stock-list'
   export default {
   	  components: {
        stockList
   	  },
   	  data() {
   	  	return {
           stockcode: '',
           tabvalue: 'first'
   	  	}
   	  },
   }
</script>