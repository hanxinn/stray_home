<script setup>

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
        <font-awesome-icon class="icon" icon="fa-solid fa-user" />
        <font-awesome-icon class="icon" icon="fa-solid fa-globe" />
        <font-awesome-icon class="icon" icon="fa-regular fa-moon" />

      </div>
    </div>
  </header>
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