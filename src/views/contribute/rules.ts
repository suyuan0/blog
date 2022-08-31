const rules = {
  article: [
    {
      required: true,
      message: "请输入内容",
      triggrt: "blur",
    },
  ],
  title: [
    {
      required: true,
      message: "请输入标题",
      trigger: "blur",
    },
  ],
  imgUrl: [
    {
      required: true,
      message: "请上传封面图片",
      trigger: "blur",
    },
  ],
};

export default rules;
