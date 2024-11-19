<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  image: {
    type: String
  }
})

const emit = defineEmits(['changePage', 'addToFavorite', 'copy'])

const changePage = () => {
  emit('changePage')
}
const addToFavorite = () => {
  emit('addToFavorite')
}
const copy = () => {
  emit('copy')
}
</script>


<template>
  <div class="pop-card">
      <div class="pop-card-pic">
        <div class="pop-card-adopt" @click="changePage">
          <p>我要認養</p>
        </div>
        <div class="pop-card-icon">
          <font-awesome-icon @click="addToFavorite" class="icon" icon="fa-regular fa-heart" />
          <font-awesome-icon @click="copy" class="icon" icon="fa-solid fa-link" />
        </div>
        <img @click="changePage" :src="image">
      </div>
    </div>
</template>
<style lang="scss" scoped>
.pop-card {
  width: 100%;
  .pop-card-pic {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover .pop-card-adopt {
      bottom: 0;
    }

    .pop-card-adopt {
      position: absolute;
      bottom: -50px;
      text-align: center;
      color: white;
      background-color: #D5B88E;
      width: 100%;
      padding: 10px;
      border-radius: 0 0 30px 30px;
      font-size: 24px;
      transition: bottom 0.3s ease;
    }

    .pop-card-icon {
      position: absolute;
      right: 10px;
      top: 10px;

      .icon {
        font-size: 24px;
        color: white;
        margin-left: 10px;
      }
    }

    img {
      width: 100%;
      object-fit: cover;
      display: block;
      border-radius: 30px;
    }
  }

}
</style>