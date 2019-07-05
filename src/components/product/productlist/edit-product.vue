<template>
	<el-dialog
       class='base-dialog'
       title="商品信息"
       :show-close='false'
       :visible.sync='visible'
       :modal-append-to-body='true'
	>
	<el-row class="nav">
	<el-breadcrumb separator="/">
	<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
	<el-breadcrumb-item :to="{path: '/product/productInfo'}">产品信息</el-breadcrumb-item>
	<el-breadcrumb-item>编辑产品</el-breadcrumb-item>
	</el-breadcrumb>
	</el-row>
	<div class='title'>基础信息</div>
    <edit-baseinfo></edit-baseinfo>
	</el-dialog>
</template>

<script>
    import editBaseinfo from './edit-baseinfo'
	export default {
	components: {
		editBaseinfo
	},
	data() {
		return {
			visible: false,
		}
	},
	methods: {
		show(id = null) {
			this.visible = true;
		}
	}
	}
</script>
<style lang='scss' scoped>
.el-dialog-body {
  padding: 0 20px;
}
.mfn-position {
  position: relative;
  .mfn-content {
    position: absolute;
    left: 90px;
    bottom: 0;
    font-size: 12px;
  }
}
</style>