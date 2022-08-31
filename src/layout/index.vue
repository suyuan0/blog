<template>
  <div class="container">
    <main class="main-container">
      <a-side></a-side>
      <a-main></a-main>
    </main>
  </div>
</template>

<script setup lang="ts">
import aSide from "./side/index.vue";
import aMain from "./main/index.vue";
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 100px);
  background: linear-gradient(to bottom, #a99cdc, #dea8ab);
  padding-top: 100px;
  .main-container {
    display: flex;
    overflow: hidden;
    height: 100%;
    .side {
      width: 260px;
    }
    .main {
      flex: 1;
    }
  }
}
</style>
