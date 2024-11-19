<script setup>
import { usePetStore } from '@/store/pet'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { formatDate } from '@/utils/time'

const petStore = usePetStore()
const route = useRoute()
const routeId = Number(route.params.id)

const pet = computed(() => petStore.pets.find(item => item.id === routeId))

</script>

<template>
  <section class="info-section">
    <div class="container">
      <div class="info-pic">
        <img :src="pet.image" alt="pet.name">
      </div>
      <div class="info-txt">
        <div class="info-name">
          <h1>{{ pet.name }}</h1>
        </div>
        <div class="pet-details">
          <div class="pet-info breed">
            <span class="info-label">品種：</span>
            <span class="info-value">{{ pet.breed }}</span>
          </div>
          <div class="pet-info type">
            <span class="info-label">種類：</span>
            <span class="info-value">{{ pet.type }}</span>
          </div>
          <div class="pet-info gender">
            <span class="info-label">性別：</span>
            <span class="info-value">{{ pet.gender }}</span>
          </div>
          <div class="pet-info size">
            <span class="info-label">體型：</span>
            <span class="info-value">{{ pet.size }}</span>
          </div>
          <div class="pet-info color">
            <span class="info-label">毛色：</span>
            <span class="info-value">{{ pet.color }}</span>
          </div>
          <div class="pet-info age">
            <span class="info-label">年紀：</span>
            <span class="info-value">約 {{ pet.birth }} 年出生</span>
          </div>
          <div class="pet-info neutered">
            <span class="info-label">結紮：</span>
            <span class="info-value">{{ pet.isNeutered? "已結紮" : "未結紮" }}</span>
          </div>
          <div class="pet-info personality">
            <span class="info-label">個性：</span>
            <span class="info-value">{{ pet.description }}</span>
          </div>
          <div class="pet-info location">
            <span class="info-label">所在地：</span>
            <span class="info-value">{{ pet.store }}</span>
          </div>
          <div class="pet-info post-date">
            <span class="info-label">刊登日期：</span>
            <span class="info-value">{{ formatDate(pet.adoptedDate) }}</span>
          </div>
        </div>
        <div class="pet-button">
          <button type="button">
            <font-awesome-icon icon="fa-solid fa-link" />
            <span>複製連結</span>
          </button>
          <button type="button">
            <font-awesome-icon icon="fa-regular fa-heart" />
            <span>加入收藏</span>
          </button>
          <button type="button">
            <font-awesome-icon icon="fa-regular fa-hand" />
            <span>我要認養</span>
          </button>
        </div>
      </div>

    </div>


  </section>
  <section class="other-section">
    <h2>其他浪浪</h2>
    <div class="cardlist">
      <div class="new-card">
                <div class="new-card-pic">
                  <div class="new-card-adopt">
                    <p>我要認養</p>
                  </div>
                  <div class="new-card-icon">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-link" />
                  </div>
                    <img src="../../assets/pic/home/dog1.jpg">
                </div>
                <div class="new-card-txt">
                    <p>
                      浪浪一號 <br>
                      約 2024 年出生 <br>
                      男生 已結紮 <br>
                      親人溫和 <br>
                    </p>
                </div>
      </div>
      <div class="new-card">
                <div class="new-card-pic">
                  <div class="new-card-adopt">
                    <p>我要認養</p>
                  </div>
                  <div class="new-card-icon">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-link" />
                  </div>
                    <img src="../../assets/pic/home/dog1.jpg">
                </div>
                <div class="new-card-txt">
                    <p>
                      浪浪一號 <br>
                      約 2024 年出生 <br>
                      男生 已結紮 <br>
                      親人溫和 <br>
                    </p>
                </div>
      </div>
      <div class="new-card">
                <div class="new-card-pic">
                  <div class="new-card-adopt">
                    <p>我要認養</p>
                  </div>
                  <div class="new-card-icon">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-link" />
                  </div>
                    <img src="../../assets/pic/home/dog1.jpg">
                </div>
                <div class="new-card-txt">
                    <p>
                      浪浪一號 <br>
                      約 2024 年出生 <br>
                      男生 已結紮 <br>
                      親人溫和 <br>
                    </p>
                </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.info-section {
  padding-top: 30px;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 10%;

    .info-pic {
      width: 45%;
      img {
        width: 100%;
        display: block;
        border-radius: 30px;
        object-fit: cover;
      }

    }

    .info-txt {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .info-name {
        h1 {
          font-size: 32px;
        }
      }
      .pet-details {
        font-size: 20px;
        line-height: 1.5;
      }
      .pet-button {
        display: flex;
        gap: 10px;
          button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          padding: 10px;
          background-color: #E7E2DA;
          &:hover {
            background-color: #FFC408;
          }
        }
    
      }

    }
  }
}
.other-section {
  max-width: 1200px;
  margin: 0 auto;
  h2 {
        font-size: 32px;
        color: #98680E;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
      }
  .cardlist {
    display: flex;
    justify-content: space-between;
    .new-card {
        width: 32%;
        margin-bottom: 30px;
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
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          p {
            font-size: 24px;
            line-height: 1.5;
          }
        }
      }

  }
}
</style>