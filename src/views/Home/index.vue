
<script setup></script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <RouterLink to="/"><img class="header-logo" src="../../assets/pic/home/headerlogo.png" alt="logo"></RouterLink>
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
                  <div class="home-card-icon">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-link" />
                  </div>
                    <img src="../../assets/pic/home/dog1.jpg">
                </div>
                <div class="home-card-txt">
                    <p>
                      浪浪一號 <br>
                      約 2024 年出生 <br>
                      男生 已結紮 <br>
                      親人溫和 <br>
                    </p>
                    <button>下一個</button>
                </div>
            </div>
    </div>

  </section>
  <footer>
    <div class="container">
      <div class="footer-info">
        <div class="logo">
        <RouterLink to="/"><img class="footer-logo" src="../../assets/pic/home/headerlogo.png" alt="logo"></RouterLink>
      </div>
      <div class="footer-nav"> 
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
      <div class="contact">
        <font-awesome-icon class="icon" icon="fa-brands fa-square-facebook" />
        <font-awesome-icon class="icon" icon="fa-brands fa-line" />
        <font-awesome-icon class="icon" icon="fa-brands fa-square-instagram" />
      </div>
      </div>
       <div class="copyright">
            <p>© 2024 Powered by Stray Home Right Reserved.</p>
        </div>
    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
  header {
    background-color: #E7E2DA;
    padding-top: 10px;
    padding-bottom: 10px;
    .container {
      width: 1200px;
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
        }

      }
    }
  }
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
    padding-bottom: 50px;
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
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .home-card-pic {
          width: 40%;
          object-fit: cover;
          position: relative;
          .home-card-icon {
            position: absolute;
            right: -75px;
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
            background-color: #D5B88E;
            font-size: 24px;
            color: white;
            width: 150px;
            height: 150px;
            border: 0;
            border-radius: 50%;
          }

        }
      }
    }
  }
  footer {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #D5B88E;
    .container {
      width: 1200px;
      margin: 0 auto;
      .footer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
        .footer-logo {
          height: 80px;
        }
      }
      .footer-nav {
        font-size: 16px;
        color: white;
        margin-left: 150px;
        ul {
          display: flex;
          flex-wrap: wrap;
          width: 80%;
          a {
            text-decoration: none;
            color: white;
            li {
              margin-bottom: 10px;
              margin-left: 150px;
              
              
            }
          }
        }

      }
      .contact {
        display: flex;
        flex-wrap: nowrap;
        .icon {
          font-size: 24px;
          margin-left: 10px;
          color: white;
        }
      }
      }
      .copyright {
        p {
          color: white;
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }

</style>