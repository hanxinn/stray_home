<script setup></script>

<template>
  <!-- banner -->
  <section class="banner">
    <h1>我要認養</h1>
  </section>
 
  <section class="search-section">
    <div class="container">
       <!-- 搜尋框和排序 -->
      <div class="filter">
        <div class="search-area">
          <font-awesome-icon class="search-front" icon="fa-solid fa-magnifying-glass" />
          <input  type="text"  class="search-input" placeholder="搜尋寵物名稱">
          <font-awesome-icon class="search-back" icon="fa-solid fa-x" />
        </div>
        <div class="filter-area">
          <div class="filter-type">
            <button>清除</button>
            <button>狗</button>
            <button>貓</button>
          </div>
          <div class="filter-loc">
            <button>台北店</button>
            <button>台中店</button>
            <button>高雄店</button>
          </div>
          <div class="filter-order">
             <select class="order-select" >
                <option value="default">請選擇排序方式</option>
                <option value="fav-desc">收藏量由高到低</option>
                <option value="views-desc">瀏覽量由高到低</option>
                <option value="date-asc">日期由舊到新</option>
                <option value="date-desc">日期由新到舊</option>
            </select>
          </div>

        </div>
      </div>
       <!-- 卡片列表 -->
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
    </div>

  </section>
  <section class="pages-section">
        <div class="pages">
          <a href="#">
            <div class="pages-num">
                ＜
            </div>
          </a>
          <a href="#">
            <div class="pages-num">
                1
            </div>
          </a>
          <a href="#">
            <div class="pages-num">
                2
            </div>
          </a>
          <a href="#">
            <div class="pages-num">
                3
            </div>
          </a>
          <a href="#">
            <div class="pages-num">
                ＞
            </div>
          </a>
            
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
   .banner {
    width: 100%;
    height: 85vh;
    background-image: url(../../assets/pic/adopt/adopt-banner.jpg);
    background-size: cover;
    background-position: bottom 5px;
    h1 {
      text-align: center;
      padding-top: 100px;
      text-shadow:  4px 4px #acaaaa;
      color: white;
      font-size: 48px;
      font-weight: bold;
    }
  }
  .search-section {
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding-top: 20px;
      .filter {
        width: 25%;
        .search-area {
          position: relative;
          .search-front {
            position: absolute;
            left: 10px;
            top: 10px;
          }
          .search-input {
            width: 100%;
            padding-left: 30px;
            padding-right: 30px;
            height: 35px;
            background-color: #E7E2DA;
            border: 0;
            border-radius: 30px;
            margin-bottom: 10px;
            cursor: pointer;
            &:hover, &:focus {
                background-color: #FFC408;
              }

          }
          .search-back {
            position: absolute;
            right: 10px;
            top: 10px;

          }
        }
        .filter-area {
          .filter-type {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
             button {
              cursor: pointer;
              height: 35px;
              background-color: #E7E2DA;
              border: 0;
              border-radius: 30px;
              padding: 10px;
              width: 30%;
              &:hover, &:focus {
                background-color: #FFC408;
              }
            }
          }
          .filter-loc {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            button {
              cursor: pointer;
              height: 35px;
              background-color: #E7E2DA;
              border: 0;
              border-radius: 30px;
              padding: 10px;
              width: 30%;
              &:hover, &:focus {
                background-color: #FFC408;
              }
            }
          }
          .filter-order {
            .order-select {
              cursor: pointer;
              width: 100%;
              padding-left: 30px;
              padding-right: 30px;
              height: 35px;
              background-color: #E7E2DA;
              border: 0;
              border-radius: 30px;
              margin-bottom: 10px;
              &:hover, &:focus {
                background-color: #FFC408;
              }
            }
          }

        }

      }
      .cardlist {
        width: 75%;
        display: flex;
        justify-content: center;
        padding-left: 3%;
        gap: 3%;
        flex-wrap: wrap;
        .new-card {
        width: 30%;
        margin-bottom: 20px;
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
  }
  .pages-section {
    padding: 30px 0;
    .pages {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    a {
      text-decoration: none;
      display: block;
      font-weight: bold;
      font-size: 16px;
      color: #000;
      .pages-num {
      cursor: pointer;
      width: 40px;
      height: 40px;
      text-align: center;
      padding: 8px;
      border-radius: 50%;
      background-color: #E7E2DA;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #FFC408;
      }
      
    }
    }
    
    
}
  }
</style>