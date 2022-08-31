import { ElLoading } from "element-plus";

const loading = () => {
  return ElLoading.service({
    target: "body",
    background: "rgba(0,0,0,0.4)",
    text: "呜呜呜，不要催了",
  });
};

export default loading;
