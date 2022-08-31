import axios from "axios";
import { ElMessage } from "element-plus";
import loading from "./loading";
const instance = axios.create({
  baseURL: "https://blogapi.darling0.cn",
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loading();
    return config;
  },
  function (error) {
    // 对请求错误做些什么

    loading().close();
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    loading().close();
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    ElMessage.error(data.msg);
  },
  function (error) {
    // 对响应错误做点什么
    loading().close();
    return Promise.reject(error);
  }
);

export default instance;
