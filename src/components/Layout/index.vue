<script setup>
import SHeader from '@/components/Layout/Header.vue'
import SFooter from '@/components/Layout/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <s-header />
    <main class="main">
      <slot />
    </main>
    <s-footer/>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main {
    flex: 1;
  }
}
</style>