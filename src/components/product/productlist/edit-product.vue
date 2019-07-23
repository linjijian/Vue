<template>
	<el-dialog
       class='base-dialog'
       title="商品信息"
       :show-close='true'
       :visible.sync='visible'
       :close-on-click-modal='false'
       width='1000px'
       :before-close="closeDialog"
	>
	<el-row class="nav">
	<el-breadcrumb separator="/">
	<el-breadcrumb-item :to="{path: '/'}">产品管理</el-breadcrumb-item>
	<el-breadcrumb-item :to="{path: '/product/productInfo'}">产品信息</el-breadcrumb-item>
	<el-breadcrumb-item>编辑产品</el-breadcrumb-item>
	</el-breadcrumb>
	</el-row>
	<div class='title baseinfo'><h4>基础信息</h4></div>
    <edit-baseinfo :initalProduct="product" :mfndisable="mfndisable"  @basesuccess="sendgetProductlist"></edit-baseinfo>
    <hr>
    <div class='title baseinfo' v-show="pbvisible">
    	<h3>图片相册</h3>
    	<edit-photo></edit-photo>
      <hr>
    </div>
    <div class='title baseinfo' v-show="pbvisible">
      <h3>扩展属性</h3>
      <edit-attribute :initalAttribute="attributelist" @attsuccess="getProductDetail({mfn:product.mfn})"></edit-attribute>
    </div>
	</el-dialog>
</template>

<script>
    import editBaseinfo from './edit-baseinfo'
    import editPhoto from './edit-photo'
    import editAttribute from './edit-attribute'
    import * as rootController from '../../../api/rootController'
    const defaultProduct = {
      _id: '',
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
      attributelist: [],
      mfndisable: false
		}
	},
	methods: {
		show(id = null) {
      let self = this
			self.visible = true;
      if (!id) {
        self.pbvisible = false
        self.mfndisable = false
        Object.keys(self.product).forEach((key) => {
           self.product[key] = ''
        })
      } else {
        self.pbvisible = true
        self.mfndisable = true
        self.getProductDetail({ mfn: id })
      }
		},
    getProductDetail(data) {
      let self = this
      rootController.getProductDetail(data)
        .then((res) => {
          self.attributelist = res
          Object.keys(self.product).forEach((key) => {
               console.log(res[key])
               if (res[key] === 'null') {
                 self.product[key] = ''
               } else {
               self.product[key] = res[key]
             }
          })
        }).catch((err) => {
          console.log(err)
        })
    },
    sendgetProductlist() {
      this.$emit('success')
    },
    closeDialog(done) {
    let self = this
    this.$confirm('确认是否关闭产品编辑信息框？')
    .then(_ => {
      done();
        // location.reload();
     })
    .catch(_ => { });
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