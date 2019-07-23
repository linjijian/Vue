<template>
	<div>
		<el-row style="margin-top:20px;">
          	<el-col :span="8">
          	   	  <el-input placeholder="请输入采购单号" v-model="stockcode" class="searchstock">
          	   	  <el-button slot="append" icon="el-icon-search" @click="getstocklist"></el-button>
          	   	  </el-input>
          	</el-col>
            <el-col :span="4" :offset="10">
               <el-button type="primary" v-show="stockstep === '0' " @click="pushstockedit">添加采购单</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top:30px;">
            <el-table
            stripe
            style="width:100%"
            :data="stocklist"
            >
            <el-table-column prop="id" label="采购单号" width="160"></el-table-column>
            <el-table-column prop="vendorName" label="供应商" width="220"></el-table-column>
            <el-table-column prop="_transport_type" label="类型" width="140"></el-table-column>
            <el-table-column prop="_step" label="状态" width="180"></el-table-column>
            <el-table-column prop="warehouseName" label="目的仓库" width="220"></el-table-column>
            <el-table-column prop="" label="采购员/创建日期" width="220"></el-table-column>
            <el-table-column prop="" label="操作" width="160">
            <template slot-scope="scope">
               	<el-button type="text" size="small">查看</el-button>
               	<el-button type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
            </el-table>
        </el-row>
	</div>
</template>
<script>
  import * as rootController from '../../../api/rootController'
  export default {
  	props: ['stockstep'],
  	data() {
  		return {
  		  stockcode: '',
        stocklist: []
  		}
  	},
  	created() {
      console.log(this.stockstep)
       this.getstocklist()
  	},
  	 methods: {
         getstocklist() {
         	let stockformdata = new FormData()
         	rootController.getStocklist({ step: this.stockstep, id: this.stockcode })
         	.then((data) => {
         		console.log(data)
            this.stocklist = data.data
         	}).catch((err) => {
         		console.log(err)
         	})
         },
         pushstockedit(stockcode = null) {
            this.$router.push('/stock/stockEdit')
         }
   	 }
  }
</script>

<style scope>
  .searchstock{
  border: 1px solid #c5c5c5;
  border-radius: 20px;
  background: #f4f4f4;
}
.searchstock .el-input-group__append {
  border: none;
  background-color: transparent;
}
.searchstock .el-input__inner {
  height: 36px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchstock .el-icon-search{
  font-size: 26px;
}
.searchstock .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
.searchstock:hover{
  border: 1px solid #D5E3E8;
  background: #fff;
}
.searchstock:hover .line {
  background-color: #D5E3E8;
}
.searchstock:hover .el-icon-search{
  color: #409eff;
  font-size: 26px;
}
</style>