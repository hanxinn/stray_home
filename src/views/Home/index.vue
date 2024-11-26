
<script setup>
import PopCard from '@/components/PopCard.vue';
import NewCard from '@/components/NewCard.vue';
import { petApi } from '@/api/pet';

const imgUrl = "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePetStore } from '@/store/pet'

const petStore = usePetStore()


// pinia => 數據存在本地(localStorage, sessionStorage)
const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const addToFavorite = (id) => {
  console.log(id);
}
const copy = (id) => {
  console.log(id);
}

const hotPets = computed(() => [...petStore.pets].sort((a, b) => b.likeNum - a.likeNum).slice(0, 5))
</script>

<template>
 
  <section class="banner">
    <h1>讓愛找到歸屬</h1>
  </section>
  <section class="home">
    <div class="home-title">
      <h2>帶我回家</h2>
    </div>
    <div class="home-cardlist">
       <div class="home-card">
                <div class="home-card-pic">
                  <div class="home-card-adopt">
                    <p>我要認養</p>
                  </div>
                  <div class="home-card-icon">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-link" />
                  </div>
                    <img src="../../assets/pic/home/dog1.jpg">
                </div>
                <div class="home-card-txt">
                    <p>
                      浪浪1號 <br>
                      約 2024 年出生 <br>
                      男生 已結紮 <br>
                      親人溫和 <br>
                    </p>
                    <button>隨機選取</button>
                </div>
            </div>
    </div>

  </section>
  <section class="popular">
    <div class="popular-title">
      <h2>人氣排行</h2>
    </div>
    <div class="popular-cardlist">
      <div class="rank1">
        <pop-card
          :image="hotPets[0].image"
          @change-page="changePage(`/pets/${hotPets[0].id}`)"
          @add-to-favorite="addToFavorite(hotPets[0].id)"
          @copy="copy(hotPets[0].id)"
         />
      </div>
      <div  class="low-rank">
        <pop-card v-for="item in hotPets.slice(1, 5)" :key="item.id"
          :image="item.image"
            @change-page="changePage(`/pets/${item.id}`)"
            @add-to-favorite="addToFavorite(item.id)"
            @copy="copy(item.id)"
         />

      </div>
    </div>

  </section>
  <section class="new">
    <div class="new-title">
      <h2>新到家人</h2>
    </div>
    <div class="container">
      <new-card
        :image= "imgUrl"
        name="浪浪1號" 
        :year="2024"
        :is-neutered="true"
        description="親人溫和"
      />
      <new-card
        :image= "imgUrl"
        name="浪浪2號" 
        :year="2024"
        :is-neutered="true"
        description="親人溫和"
      />
      <new-card
        :image= "imgUrl"
        name="浪浪3號" 
        :year="2024"
        :is-neutered="true"
        description="親人溫和"
      />
      
    </div>

  </section>
  
  
</template>

<style lang="scss" scoped>
  
  .banner {
    width: 100%;
    height: 85vh;
    background-image: url(../../assets/pic/home/banner.jpg);
    background-size: cover;
    background-position: bottom 50px;
    h1 {
      text-align: center;
      padding-top: 100px;
      text-shadow:  4px 4px #acaaaa;
      color: white;
      font-size: 48px;
      font-weight: bold;
    }
  }
  .home {
    .home-title {
      h2 {
        font-size: 32px;
        color: #98680E;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
    .home-cardlist {
      .home-card {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        .home-card-pic {
          width: 40%;
          object-fit: cover;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          &:hover .home-card-adopt {
            bottom: 0;
          }
          .home-card-adopt {
            position: absolute;
            bottom: -50px;
            text-align: center;
            color: white;
            background-color: #D5B88E;
            width: 100%;
            padding: 10px;
            border-radius: 0 0 0 30px;
            font-size: 24px;
            transition: bottom 0.3s ease;
          }
          .home-card-icon {
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
            border-radius: 30px 0 0 30px;
            width: 100%;
            height: 100%;
          }

        }
        .home-card-txt {
          border-radius: 0 30px 30px 0;
          width: 60%;
          background-color: #E7E2DA;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          p {
            margin-right: 100px;
            font-size: 24px;
            line-height: 1.5;
          }
          button {
            &:hover {
              background-color: #FFC408;
            }
            background-color: #D5B88E;
            font-size: 24px;
            color: white;
            width: 150px;
            height: 150px;
            border: 0;
            border-radius: 50%;
            cursor: pointer;
          }

        }
      }
    }
  }
  .popular {
    .popular-title {
      h2 {
        font-size: 32px;
        color: #98680E;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
    .popular-cardlist {
      display: flex;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
      gap: 3%;
      .rank1 {
        width: 50%;
      }
      .low-rank {
        width: 50%;
        display: flex;
        gap: 6%;
        flex-wrap: wrap;
        .pop-card {
          width: 47%;
          height: 47%;

        }
      }
    }
  }
  .new {
    padding-bottom: 50px;
    .new-title {
      h2 {
        font-size: 32px;
        color: #98680E;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
    .container {
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .new-card {
         width: 32%;
      }
    }
  }
  

</style>