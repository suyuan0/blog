<template>
  <div class="container">
    <h1 class="title">{{ articleDetail.title }}</h1>
    <div v-html="articleDetail.article"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { articleDetailAPI } from "@/api/article";
const route = useRoute();
// interface detail {
//   article: string;
//   id: number;
//   imgUrl: string;
//   nick_name: string;
//   title: string;
// }
const articleDetail = ref<any>({});
const getDetail = async () => {
  try {
    const { data } = await articleDetailAPI(route.params);
    articleDetail.value = data.list;
  } catch (error) {
    console.log(error);
  }
};
getDetail();
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  width: 1366px;
  padding-top: 10px;
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
}
::-webkit-scrollbar {
  height: 0px;
}
</style>
