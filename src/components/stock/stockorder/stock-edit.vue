<template>
	<div class="stockedit">
		<el-row style="margin-bottom:30px">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">采购管理</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/stock/stockOrder' }">采购单管理</el-breadcrumb-item>
				<el-breadcrumb-item>采购单编辑</el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
		<el-row>
		<el-tabs>
			<el-tab-pane label="详情" name="first">
			  <stock-main></stock-main>	
			</el-tab-pane>
			<el-tab-pane label="明细" name="second">
			</el-tab-pane>
			<el-tab-pane label="其它费用" name="third">
			</el-tab-pane>
		</el-tabs>
	    </el-row>
	</div>
</template>
<script>
  import stockMain from './stock-main'
  export default{
      components: {
         stockMain,
      },
      data() {
      	return {

      	}
      }
  }
</script>