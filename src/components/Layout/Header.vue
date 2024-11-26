<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue';
import { useUserStore } from '@/store/user'
import { userApi } from '@/api/user'

const userStore = useUserStore()
console.log(userStore);

const open = ref(false)
const openModal = (bool) => {
  open.value = bool
}

const loginData = reactive({
  username: '',
  password: '',
  firstName: userStore.firstName
})

// 串接API => 網址(協議+域名+路徑)+請求體(參數)+請求方式(get/post)
// axios

// axios.請求方式('請求網址', { 參數 })
// promise
// axios.get('https://dummyjson.com/carts')
// .then(res => console.log(res.data.carts))

// async/await => 同步方式(函數)去寫非同步語法
// const getCarts = async() => {
//   const { data } = await axios.get('https://dummyjson.com/carts')
//   console.log('data', data.carts);
// }
// getCarts()


// 登入
// => 前端帳號、密碼透過 登入API傳給後端 => 後端驗證正確，回傳token給前端
// => 前端將token存放在本地(localStorage、cookie)
// => 表單驗證
// => 使用者體驗

const token = ref(userStore.token)

const submit = async() => {
  if (!loginData.username || !loginData.password) {
    message.warning('請輸入使用者名稱或密碼')
    return
  }
  try {
    const { accessToken, firstName } = await userApi.login(loginData.username, loginData.password)
    token.value = accessToken // 畫面改變 ref
    loginData.firstName = firstName // 畫面改變 reactive
    userStore.setFirstName(firstName) // 存進store
    userStore.setToken(accessToken) // 存進store
    message.success('登入成功')
  } catch(err) {
    console.error(err)
    message.error('使用者名稱或密碼錯誤')
  } finally {
    openModal(false)
  }
}
const logout = () => {
  userStore.setToken('')
  token.value = ''
  message.success('登出成功')
}

</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <RouterLink to="/"><img class="header-logo" src="@/assets/pic/home/headerlogo.png" alt="logo"></RouterLink>
      </div>
      <div class="header-nav"> 
        <ul>
          <RouterLink to="/about">
            <li>關於浪窩</li>
          </RouterLink>
          <RouterLink to="/adopt">
            <li>我要認養</li>
          </RouterLink>
          <RouterLink to="/donate">
            <li>我要捐款</li>
          </RouterLink>
          <RouterLink to="/adoptRecord">
            <li>認養紀錄</li>
          </RouterLink>
          <RouterLink to="/donateRecord">
            <li>捐款紀錄</li>
          </RouterLink>
        </ul>

      </div>
      <div class="login">
        <span v-if="token" class="name-span" >{{ loginData.firstName }}</span>
        <a-button v-if="token" @click="logout">登出</a-button>
        <font-awesome-icon v-else @click="openModal(true)" class="icon" icon="fa-solid fa-user" />
        <font-awesome-icon class="icon" icon="fa-solid fa-globe" />
        <font-awesome-icon class="icon" icon="fa-regular fa-moon" />

      </div>
    </div>
  </header>
  <a-modal v-model:open="open" title="登入" @ok="submit" @cancel="openModal(false)" :okText="'送出'" :cancelText="'關閉'">
    <div>
      <label for="username">使用者名稱：</label>
      <input v-model="loginData.username" type="text" id="username" name="username">
    </div>
    <div>
      <label for="password">密碼：</label>
      <input v-model="loginData.password" type="password" id="password" name="password">
    </div>
  </a-modal>
</template>
<style lang="scss" scoped>

  header {
      background-color: #E7E2DA;
      padding-top: 10px;
      padding-bottom: 10px;
      .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          .header-logo {
            height: 80px;
          }

        }
        .header-nav {
          font-size: 24px;
          color: #98680E;
          ul {
            display: flex;
            a {
              text-decoration: none;
              color: #98680E;
              &:hover {
                color: #FFC408;
              }
              li {
                margin-right: 50px;
              }
            }
          }

        }
        .login {
          .name-span {
            margin-right: 10px;
          }
          .icon {
            font-size: 24px;
            margin-left: 20px;
            color: #98680E;
            cursor: pointer;
            &:hover {
                color: #FFC408;
              }
          }

        }
      }
    }
</style>