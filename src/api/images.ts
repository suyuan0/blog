import request from "../utils/request";

const getImagesAPI = () => {
  return request({
    url: "/images",
    method: "GET",
  });
};

export default getImagesAPI;
