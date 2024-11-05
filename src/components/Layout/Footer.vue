<template>
  <footer>
    <div class="container">
      <div class="footer-info">
        <div class="logo">
        <RouterLink to="/"><img class="footer-logo" src="@/assets/pic/home/headerlogo.png" alt="logo"></RouterLink>
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
            &:hover {
              color: #FFC408;
            }
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
          cursor: pointer;
          &:hover {
              color: #FFC408;
            }
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