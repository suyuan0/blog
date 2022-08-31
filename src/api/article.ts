import request from "../utils/request";

export const getArticleAPI = () => {
  return request({
    url: "/users/article",
    method: "GET",
  });
};

export const addArticleAPI = (data: object) => {
  return request({
    url: "/users/add_article",
    method: "POST",
    data,
  });
};

export const articleDetailAPI = (data: any) => {
  return request({
    url: "/users/article_detail",
    method: "GET",
    params: {
      id: data.id,
    },
  });
};
