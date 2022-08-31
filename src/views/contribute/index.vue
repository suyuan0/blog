<template>
  <div class="wrapper">
    <header>
      <el-alert show-icon :closable="false">
        报错不用管，上传图片的图片名字不能存在中文
      </el-alert>
      <el-form ref="formRef" inline :rules="rules" :model="formModel">
        <el-form-item prop="title" label="标题：">
          <el-input
            v-model="formModel.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input
            v-model="formModel.nick_name"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <el-form-item label="封面：" prop="imgUrl">
          <el-upload
            class="upload-demo"
            action="https://blogapi.darling0.cn/users/upload"
            :on-success="handleSuccess"
          >
            <el-button type="primary">上传封面</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item v-if="formModel.imgUrl" label="封面预览">
          <el-image
            style="width: 100px; height: 100px"
            :src="formModel.imgUrl"
            :preview-src-list="srcList"
            :initial-index="0"
          ></el-image>
        </el-form-item>
        <el-form-item label="内容：" prop="article">
          <editor
            @changeArticle="(value:any)=>formModel.article = value"
          ></editor>
        </el-form-item>
        <el-form-item label="将你的内容发表上去叭：">
          <el-button type="warning" @click="submit">发表</el-button>
        </el-form-item>
      </el-form>
    </header>
  </div>
</template>

<script setup lang="ts">
import editor from "../../components/editor/index.vue";
import { useRouter } from "vue-router";
import { UploadProps } from "element-plus";
import { reactive, ref } from "vue";
import { getArticleAPI, addArticleAPI } from "../../api/article";
import tip from "../../utils/message";
import rules from "./rules";
const router = useRouter();
const formRef = ref(null);
const srcList: string[] = reactive([]);
const handleSuccess: UploadProps["onSuccess"] = (response: any) => {
  srcList[0] = response.url;
  formModel.imgUrl = response.url;
};
const formModel = reactive({
  nick_name: "",
  title: "",
  imgUrl: "",
  article: "",
});

const submit = async () => {
  try {
    await (formRef.value as any).validate();
    await addArticleAPI(formModel);
    tip("投稿成功,即将跳转", "success");
    resetForm();
    router.push("/works");
  } catch (error) {
    console.log(error);
  }
};
const resetForm = () => {
  formModel.nick_name = "";
  formModel.title = "";
  formModel.imgUrl = "";
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 30px;
}
.el-alert {
  margin-bottom: 10px;
}
::v-deep(.el-upload-list) {
  display: none;
}
</style>
