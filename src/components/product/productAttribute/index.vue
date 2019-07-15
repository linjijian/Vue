<template>
	<div class="product-attribute">
		<el-row class="nav">
			<el-breadcrumb separator="/">
		  		<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
		  		<el-breadcrumb-item>扩展属性</el-breadcrumb-item>
		 	</el-breadcrumb>
	   </el-row>
     <el-row style="margin:40px 20px 0 20px">
        <el-form
        size='small'
        :model='attribute'
        label-width='74px'
        label-position='left'
        ref='attribute'
        id="attribute"
        :rule='rules'
        >
        <el-row :gutter="40">
          <el-col :span="10">
            <el-form-item label='名称' prop='name'>
            <el-input v-model='attribute.name'></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="6">
          <el-button type="primary" size="small" @click="AddAttribute">添加属性</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="10">
            <el-form-item label='字段' prop='id'>
            <el-input v-model='attribute.id'></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="6">
          <el-button type="primary" size="small">重置</el-button>
          </el-col>
        </el-row>

        </el-form>
     </el-row>
	   <el-row class="table" style="margin:60px 20px 0 20px" :span="16">
          <el-table
           :stripe="true"
           :border="true"
           :data="showTable"
            ref="AttributeTable"
           :header-cell-style="{
		       'text-align':'center',
		       'font-size' :'18px'
           }"
           :cell-style="{
		       'text-align': 'center',
           }"
          >
          <el-table-column label="属性" width="180"
          prop="name"
          >
          </el-table-column>
          <el-table-column label="字段名" width="260"
          prop="id"
          >
          </el-table-column>
          <el-table-column label="操作" width="150">
          	<template slot-scope="scope">
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
          </el-table>
	   </el-row>
     <el-row class="pagination">
     <el-pagination
      :hide-on-single-page="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.attributelist.length">
     </el-pagination>
     </el-row>
	</div>
</template>
<script>
  import * as rootController from '../../../api/rootController'
	export default {
		data() {
		  return {
		  	attributelist: [],
        pagesize: 5,
        currentPage: 1,
        attribute: {},
        rules: {
          name: [{ required: true, message: '请输入属性名称', trigger: 'blur' }]
        }
		  }
		},
    computed: {
      showTable() {
        return this.attributelist.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        )
      }
    },
		created() {
            rootController.getAttribute()
            .then((data) => {
            	this.attributelist = data;
            })
		},
    methods: {
      handleCurrentChange(currentPage) {
         this.currentPage = currentPage;
      },
      handleSizeChange(pagesize) {
         this.pagesize = pagesize;
      },
      AddAttribute() {

      }
    }
	}
</script>