<script setup>
  defineProps({
  image: {
    type: String
  },
  name: {
    type: String
  },
  year: {
    type: Number
  },
  isMale: {
    type: Boolean,
    default: true
  },
  isNeutered: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  }
})
</script>

<template>
  <div class="new-card">
    <div class="new-card-pic">
      <div class="new-card-adopt">
        <p>我要認養</p>
      </div>
      <div class="new-card-icon">
        <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
        <font-awesome-icon class="icon" icon="fa-solid fa-link" />
      </div>
      <img :src="image">
    </div>
    <div class="new-card-txt">
      <p>{{ name }}</p>
      <p>約 {{ year }} 年出生</p>
      <p>{{ isMale ? "男生" : "女生" }} {{ `${isNeutered ? '已' : '未'}結紮`  }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .new-card {
        .new-card-pic {
          object-fit: cover;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          &:hover .new-card-adopt {
            bottom: 0;
          }
          .new-card-adopt {
            position: absolute;
            bottom: -50px;
            text-align: center;
            color: white;
            background-color: #D5B88E;
            width: 100%;
            padding: 10px;
            font-size: 24px;
            transition: bottom 0.3s ease;
          }
          .new-card-icon {
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
            display: block;
            border-radius: 30px 30px 0 0;
            width: 100%;
          }

        }
        .new-card-txt {
          border-radius: 0 0 30px 30px;
          width: 100%;
          background-color: #E7E2DA;
          text-align: center;
          padding: 30px;
          p {
            font-size: 24px;
            line-height: 1.5;
          }
        }
      }
</style>