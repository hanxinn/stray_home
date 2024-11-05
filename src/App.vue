<script setup>
  import { RouterView } from 'vue-router'; // 1. 引入 router-view
  import Layout from '@/components/Layout/index.vue'
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>

<style scoped>

</style>
