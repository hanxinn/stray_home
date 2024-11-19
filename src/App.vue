<script setup>
  import { RouterView } from 'vue-router'; // 1. 引入 router-view
  import Layout from '@/components/Layout/index.vue'
  import { onMounted, ref } from 'vue'
  import { petApi } from '@/api/pet'
  import { usePetStore } from '@/store/pet'

  const petStore = usePetStore()

  const pets = ref(petStore.pets)

  const getPets = async() => {
    const { data } = await petApi.getPets()
    petStore.setPets(data)
  }

onMounted(() => {
  if (!pets.value.length) { 
    getPets()
  }
})
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>

<style scoped>

</style>
