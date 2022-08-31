<template>
  <div>
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :defaultConfig="editorConfig"
        mode="default"
        v-model="valueHtml"
        style="height: 400px; overflow-y: hidden"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
const emits = defineEmits(["changeArticle"]);
// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");

// 模拟 ajax 异步获取内容

const toolbarConfig = {};
const editorConfig = {
  placeholder: "说点什么叭...",
  MENU_CONF: {
    uploadImage: {
      server: "https://blogapi.darling0.cn/users/upload",
      fieldName: "file",
      // 单个文件上传成功之后
      onFailed(file: File, res: any) {
        // JS 语法
        // console.log(`${file.name} 上传失败`, res);
        valueHtml.value += `<img src="${res.url}" />`;
      },
    },
  },
};
// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.destroy();
});

// 编辑器回调函数
// 创建
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
// 修改
const handleChange = (editor: any) => {
  // console.log(editor.getHtml());
  emits("changeArticle", editor.getHtml());
};
// 销毁
const handleDestroyed = (editor: any) => {};
// focus

const customAlert = (info: any, type: any) => {
  alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor: any, event: Event, callback: Function) => {
  // console.log("ClipboardEvent 粘贴事件对象", event);

  // 自定义插入内容
  editor.insertText("xxx");

  // 返回值（注意，vue 事件的返回值，不能用 return）
  callback(false); // 返回 false ，阻止默认粘贴行为
  // callback(true) // 返回 true ，继续默认的粘贴行为
};

const insertText = () => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.insertText("hello world");
};

const printHtml = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  // console.log(editor.getHtml());
};

const disable = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.disable();
};
</script>
