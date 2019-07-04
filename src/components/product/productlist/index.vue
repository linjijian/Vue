<template>
	<div class="sd-comm-manage">
		<el-row class="nav">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>产品管理</el-breadcrumb-item>
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
        	<el-button type="primary">新增产品</el-button>
        	<el-table>
        	   <el-table-column  width="180"></el-table-column>
        	   <el-table-column label="品名" width="180"></el-table-column>
               <el-table-column label="品类" width="180"></el-table-column>
               <el-table-column label="主色" width="180"></el-table-column>
               <el-table-column label="主材质" width="180"></el-table-column>
               <el-table-column label="开发人员" width="180"></el-table-column>
               <el-table-column  width="180"></el-table-column>
        	</el-table>
		</el-row>
	</div>
</template>

<script type="text/javascript">
   export default {

   	  data() {
	    return {
	      search: {
	        mfn: ''
	      },
	    }
	  },
   }
</script>