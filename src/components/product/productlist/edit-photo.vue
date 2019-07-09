<template>
  <div >
    <p style="margin-top:20px; margin-bottom:30px;">首张图片将作为商品封面</p>
    <el-form class="form-wrapper padding" ref="addForm" :model="addForm" :rules="addRules">
      <el-form-item prop="photo">
        <el-upload
          :action="base"
          multiple
          accept="image/png, image/jpeg"
          list-type="picture-card"
          :before-upload="beforeUploadPicture"
          :on-preview="handlePictureCardPreview"
          :on-progress="uploadProgress"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :show-file-list="true">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addEnsure">保存</el-button>
      </el-form-item>
    </el-form>
    <el-dialog class="preview-modal" :visible.sync="imgVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="photo">
    </el-dialog>
  </div>
</template>