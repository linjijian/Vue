<template>
	<div class="product-manage">
		<el-row class="nav">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
				<el-breadcrumb-item>产品信息</el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
		<el-row class="search-bar">
			<el-col :span="18">
				<el-form :inline="true" size="small">
					<el-form-item >
						<el-input v-model="search.mfn" placeholder='MFN' clearable></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="11">检索</el-button>
					</el-form-item>
					<el-form-item>
						<el-button @click="11">重置</el-button>
					</el-form-item>
				</el-form>
			</el-col>
            <el-col :span="2">
				<el-dropdown >
					<el-button type="primary" size="small">
						 批量操作<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>导入商品</el-dropdown-item>
					<el-dropdown-item @click.native="$refs['product-export'].show()">导出产品</el-dropdown-item>
					<el-dropdown-item>批量传图</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<el-col :span="2">
				&nbsp;
			</el-col>
			<el-col :span="2">
				<el-button type="primary" plain size="small" @click="$refs['product-dialog'].show()">
					新增产品
				</el-button>
			</el-col>
		</el-row>
		<el-row class="table">
        	<el-button type="primary" @click="$refs['product-dialog'].show()">新增产品</el-button>
        	<el-table
              stripe
              ref="productTable"
              :data="productlist"
              border
        	>
        	   <el-table-column
					type="selection"
					width="36">
			   </el-table-column>
			   <el-table-column>
					<template slot-scope="scope">
						<el-popover
							ref="popover"
							placement="right-start"
							trigger="hover"
							:visible-arrow="false">
							<img v-if="scope.row.cover" :src="scope.row.cover" style="width: 200px; height: 200px;">
							<img v-else src="/static/no-photo.jpg" style="width: 200px; height: 200px;">
							<img slot="reference" v-if="scope.row.cover" :src="scope.row.cover" style="width: 60px;height: 60px;border: 1px solid #F9FAFC;vertical-align: middle; margin: 5px">
							<img slot="reference" v-else src="/static/no-photo.jpg" style="width: 60px;height: 60px;border: 1px solid #F9FAFC;vertical-align: middle; margin: 5px">
						</el-popover>
					</template>
			   </el-table-column>
        	   <el-table-column prop="name" label="品名" width="160"></el-table-column>
        	   <el-table-column prop="" label="品类" mini-width="35%"></el-table-column>
               <el-table-column prop="mfn" label="MFN" mini-width="35%"></el-table-column>
               <el-table-column label="主色" mini-width="10%"></el-table-column>
               <el-table-column label="主材质" mini-width="10%"></el-table-column>
               <el-table-column label="开发人员" mini-width="10%"></el-table-column>
               <el-table-column label="操作" width="100">
               	  <template slot-scope="scope">
               	  	  <el-button type="text" @click="$refs['product-dialog'].show(scope.row.mfn)">编辑</el-button>
               	  </template>
               </el-table-column>
        	</el-table>
		</el-row>
		<el-row class="pagination">
           <el-pagination
           :current-page.sync="pageDat.current_page"
           :page-size="parseInt(pageDat.per_page)"
           :page-sizes="[10,20,30,50]"
           layout="total,  prev, pager, next,sizes,jumper"
           :total="pageDat.total"
           @current-change="changePageHandler"
           @size-change="changeSizeHandler"
           >
           </el-pagination>
		</el-row>
        <product-edit
        ref="product-dialog" @success="getProductlist"
        >
        </product-edit>
        <export-product
        ref="product-export"
        >
        </export-product>
	</div>
</template>

<script type="text/javascript">
   import * as rootController from '../../../api/rootController'
   import ProductEdit from './edit-product'
   import ExportProduct from './export-product'
   export default {
   	  components: {
   	  	ProductEdit,
   	  	ExportProduct
   	  },
   	  data() {
	    return {
	      search: {
	        mfn: ''
	      },
	      pageDat: { per_page: 10 },
	      productlist: []
	    }
	  },
	  methods: {
	  	getProductlist(mfndata = '') {
	  	   let self = this
	  	   let currentPage = this.pageDat.current_page || 1
	  	   let prodJson = {
	  	   	             mfn: mfndata,
	  	   	             page: currentPage,
	  	   	             num_per_page: this.pageDat.per_page
	  	   	}
           rootController.getProductlist(prodJson)
           .then((res) => {
           	 console.log(res)
           	 this.productlist = res.data
           	 this.pageDat.total = res.total
           })
	  	},
	  	changePageHandler() {
	  	  this.getProductlist()
	  	},
	  	changeSizeHandler(size) {
	  		this.pageDat.per_page = size
            this.getProductlist()
	  	},
	  },
	  mounted() {
	  	this.getProductlist()
	  }
   }
</script>