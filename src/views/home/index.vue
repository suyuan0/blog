<template>
  <div class="wrapper">
    <!-- banner -->
    <div class="banner">
      <img
        alt="123"
        src="https://blogapi.darling0.cn/public/uploads/banner_2.jpg"
      />
    </div>
    <div v-for="item in 100" :key="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banner {
  background: #d29594;
  margin: -10px -10px 0 -50px;
  display: flex;
  justify-content: center;
  height: 600px;
  img {
    height: 100%;
    opacity: 0.6;
  }
}
</style>
