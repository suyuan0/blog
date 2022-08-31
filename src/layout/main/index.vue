<template>
  <main class="main">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main {
  background: #fff;
  border-radius: 20px 20px 0 0;
}
</style>
