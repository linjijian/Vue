<template>
	<div class="sd-comm-manage">
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
				<el-dropdown>
					<el-button type="primary" size="small">
						 批量操作<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>导入商品</el-dropdown-item>
					<el-dropdown-item>导出产品</el-dropdown-item>
					<el-dropdown-item>批量传图</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<el-col :span="2">
				&nbsp;
			</el-col>
			<el-col :span="2">
				<el-button type="primary" plain size="small">
					新增产品
				</el-button>
			</el-col>
		</el-row>
		<el-row class="table">
        	<el-button type="primary" @click="$refs['product-dialog'].show()">新增产品</el-button>
        	<el-table
              stripe
              ref="productTable"
              :data="productList"
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
        	   <el-table-column  width="180"></el-table-column>
        	   <el-table-column label="品名" width="180"></el-table-column>
        	   <el-table-column label="品类" width="180"></el-table-column>
               <el-table-column label="MFN" width="180"></el-table-column>
               <el-table-column label="主色" width="180"></el-table-column>
               <el-table-column label="主材质" width="180"></el-table-column>
               <el-table-column label="开发人员" width="100"></el-table-column>
               <el-table-column  width="100"></el-table-column>
        	</el-table>
		</el-row>
        <product-edit
        ref="product-dialog"
        >
        </product-edit>
	</div>
</template>

<script type="text/javascript">
   import ProductEdit from './edit-product'
   export default {
   	  components: {
   	  	ProductEdit
   	  },
   	  data() {
	    return {
	      search: {
	        mfn: ''
	      },
	    }
	  },
   }
</script>