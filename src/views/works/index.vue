<template>
  <div class="wrapper">
    <div class="article-container" v-for="item in articleList" :key="item?.id">
      <div class="list">
        <div class="mode" @click.self="handleToDetail(item)">查看详情</div>
        <div
          class="content"
          :style="{
            background: `url(${item?.imgUrl})`,
            backgroundSize: `cover`,
          }"
        ></div>
      </div>
      <h1 class="title">{{ item?.title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticleAPI } from "../../api/article";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
interface article {
  article: string;
  id: number;
  imgUrl: string;
  nick_name: string;
  title: string;
}
const articleList = ref<article[]>([]);
const getArticle = async () => {
  try {
    const { data } = await getArticleAPI();
    articleList.value = data.list;
  } catch (e) {
    console.log(e);
  }
};
getArticle();
const handleToDetail = (item: any) => {
  router.push(`/article/detail/${item.id}`);
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .article-container {
    height: 320px;
    width: 30%;
    margin-left: 30px;
    margin-top: 30px;
    .list {
      height: 300px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      border: 1px solid #e4e7ed;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      &:hover .mode {
        opacity: 1;
        transition: all 0.5s;
      }
      &:hover .content {
        transition: all 0.5s;
        transform: scale(1.2);
      }
      .mode,
      .content {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      .mode {
        background: rgba(0, 0, 0, 0.5);
        z-index: 5;
        opacity: 0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .title {
      font-size: 20px;
      width: 90%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-top: 10px;
    }
  }
}
</style>
