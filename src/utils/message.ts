import { ElNotification } from "element-plus";
const tip = (message: string, type: any) => {
  ElNotification({
    type,
    message,
  });
};

export default tip;
