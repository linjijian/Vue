<template>
	<el-dialog
       class='base-dialog'
       title="商品信息"
       :show-close='true'
       :visible.sync='visible'
       width='1000px'
	>
	<el-row class="nav">
	<el-breadcrumb separator="/">
	<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
	<el-breadcrumb-item :to="{path: '/product/productInfo'}">产品信息</el-breadcrumb-item>
	<el-breadcrumb-item>编辑产品</el-breadcrumb-item>
	</el-breadcrumb>
	</el-row>
	<div class='title baseinfo'><h4>基础信息</h4></div>
    <edit-baseinfo :initalProduct="product"></edit-baseinfo>
    <hr>
    <div class='title baseinfo' v-show="pbvisible">
    	<h3>图片相册</h3>
    	<edit-photo></edit-photo>
      <hr>
    </div>
    <div class='title baseinfo' v-show="pbvisible">
      <h3>扩展属性</h3>
      <edit-attribute :initalAttribute="attributelist"></edit-attribute>
    </div>
	</el-dialog>
</template>

<script>
    import editBaseinfo from './edit-baseinfo'
    import editPhoto from './edit-photo'
    import editAttribute from './edit-attribute'
    import * as rootController from '../../../api/rootController'
    const defaultProduct = {
    	name: '',
    	mfn: '',
    	cat: '',
    	clr: '',
    	mat: '',
    	length: '',
    	width: '',
    	height: '',
    	weight: '',
      album: [],
    }
	export default {
	components: {
		editBaseinfo,
    editPhoto,
    editAttribute
	},
	data() {
		return {
			visible: false,
      pbvisible: false,
			product: defaultProduct,
      attributelist: []
		}
	},
	methods: {
		show(id = null) {
			this.visible = true;
      if (!id) {
        this.pbvisible = false
      } else {
        this.pbvisible = true
        rootController.getProductDetail({mfn:id})
        .then((res) => {
          console.log(res)
        })

      }
		}
	}
	}
</script>
<style lang='scss' scoped>
.el-dialog-body {
  padding: 0 20px;
}
.baseinfo{
	 margin-bottom:10px;
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