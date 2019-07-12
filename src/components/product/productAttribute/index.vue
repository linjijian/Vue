<template>
	<div class="product-attribute">
		<el-row class="nav">
			<el-breadcrumb separator="/">
		  		<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
		  		<el-breadcrumb-item>扩展属性</el-breadcrumb-item>
		 	</el-breadcrumb>
	   </el-row>
	   <el-row class="table" style="margin:80px 20px 0 20px" :span="16">
          <el-table
           :stripe="true"
           :border="true"
           :data="attributelist"
           ref="AttributeTable"
           :header-cell-style="{
		   'text-align':'center',
		   'font-size' :'18px'
           }"
           :cell-style="{
		   'text-align': 'center',
          }"
          >
          <el-table-column type="expand">
          	<template slot-scope="props">
          	</template>
          </el-table-column>
          <el-table-column label="属性" width="180"
          prop="name"
          >
          </el-table-column>
          <el-table-column label="字段名" width="260"
          prop="id"
          >
          </el-table-column>
          <el-table-column label="操作" width="90">
          	<template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
          </el-table>
	   </el-row>
	</div>
</template>
<script>
    import * as rootController from '../../../api/rootController'
	export default {
		data() {
		  return {
		  	attributelist: []
		  }
		},
		created() {
            rootController.getAttribute()
            .then((data) => {
            	this.attributelist = data;
            })
		}
	}
</script>