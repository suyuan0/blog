<template>
  <div class="side">
    <!-- 头像 -->
    <div class="avatar">
      <img src="../../assets/images/avatar.jpg" alt="" />
    </div>
    <h1 class="nick-name">moon</h1>
    <ul class="menus">
      <li
        v-for="item in menus"
        :key="item.id"
        :class="['item', { active: item.path === $route.fullPath }]"
        @click="handleTo(item)"
      >
        <span :class="['iconfont', item.icon]"></span>
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import menus from "./menus";
import { Router, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
const router: Router = useRouter();
const handleTo = (item: object) => {
  router.push((item as any).path);
};
</script>

<style lang="scss" scoped>
$text-white: #fff;
.side {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 120px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.nick-name {
  color: $text-white;
  font-size: 30px;
  margin-top: 30px;
}
.menus {
  width: 200px;
  margin: 40px 0 0 10px;
  .item {
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    cursor: pointer;
    color: #e7e1f2;
    height: 35px;
    margin: 15px 0;
    transition: all 0.5s;
    .iconfont {
      font-size: 20px;
    }
    .title {
      margin-left: 40px;
      width: 70px;
      text-align: center;
    }
    &:hover,
    &.active {
      color: $text-white;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
    &.active {
      background: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
