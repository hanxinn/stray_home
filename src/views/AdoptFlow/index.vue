<script setup></script>

<template>
  <!-- banner -->
  <section class="banner">
    <h1>認養申請</h1>
  </section>
  <section class="section section-adopt">
    <div class="pet-data">
      <div class="pet-pic">
        <img
          src="https://images.unsplash.com/photo-1669001247645-679497ce9368?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="寵物">
      </div>
      <div class="pet-info breed">
        <span class="info-label">品種：</span>
        <span class="info-value">米克斯</span>
      </div>
      <div class="pet-info type">
        <span class="info-label">種類：</span>
        <span class="info-value">貓</span>
      </div>
      <div class="pet-info gender">
        <span class="info-label">性別：</span>
        <span class="info-value">男生</span>
      </div>
      <div class="pet-info age">
        <span class="info-label">年紀：</span>
        <span class="info-value">約 2024 年出生</span>
      </div>
      <div class="pet-info location">
        <span class="info-label">所在地：</span>
        <span class="info-value">台中店</span>
      </div>
    </div>
    <form action="#" method="post" class="adopt-form">
      <div class="form-wrap">
        <label for="date">申請日期</label>
        <input type="date" id="date">
      </div>
      <div class="form-wrap">
        <label for="name">姓名</label>
        <input type="text" placeholder="請輸入姓名" id="name">
      </div>
      <div class="form-wrap">
        <label for="tel">電話</label>
        <input type="tel" placeholder="請輸入電話" id="tel">
      </div>
      <div class="form-wrap">
        <label for="id">身分證號</label>
        <input type="text" placeholder="請輸入身分證號" id="id">
      </div>
      <div class="form-wrap">
        <label for="mail">E-MAIL</label>
        <input type="email" placeholder="請輸入E-MAIL" id="mail">
      </div>
      <div class="form-wrap">
        <label for="address">通訊地址</label>
        <input type="text" placeholder="請輸入通訊地址" id="address">
      </div>
    </form>
  </section>
  <section class="section section-survey">
    <form action="#" method="post" class="adopt-survey">
      <fieldset>
        <legend>(一) 您是否看過犬貓之行為健康評估表? 您是否與管理人員或志工討論過該犬貓之狀況?</legend>
        <label><input type="radio" name="question1" value="是"> 是</label>
        <label><input type="radio" name="question1" value="否"> 否</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(二) 您是否知道犬貓的健康有許多不確定的風險? 您是否了解當牠生病時立即就醫治療是飼主的責任?</legend>
        <label><input type="radio" name="question2" value="了解"> 了解</label>
        <label><input type="radio" name="question2" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(三) 您是否了解犬貓因想要什麼或不想要什麼的時候藉由吠叫來表達，也會因為個性的不同及對事物的好奇會有難以控制的情況發生，只要透過適當的教導就可以獲得改善。 您是否了解:
          給犬貓良好的教育，是飼主應該努力學習的責任?</legend>
        <label><input type="radio" name="question3" value="了解"> 了解</label>
        <label><input type="radio" name="question3" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(四) 您是否了解犬貓剛到新環境時，許多潛在的疾病會因 1.運輸過程吹風淋雨 2.洗澡 3.過度玩耍 4.更換食物等等讓降低抵抗力而爆發疾病 您是否了解飼主在犬貓適應期間扮演著極度重要的角色?
          (註:運輸使用運輸籠，14天後再洗澡，以乾飼料為主食可幫助犬貓度過適應期)</legend>
        <label><input type="radio" name="question4" value="了解"> 了解</label>
        <label><input type="radio" name="question4" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(五) 您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查</legend>
        <label><input type="radio" name="question5" value="了解"> 了解</label>
        <label><input type="radio" name="question5" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(六) 犬貓將近有15年的壽命，您是否了解無論人事物的演變(例如:結婚生子 搬家出國 當兵)都不足以構成棄養的原因!</legend>
        <label><input type="radio" name="question6" value="了解"> 了解</label>
        <label><input type="radio" name="question6" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(七) 您是否了解飼養動物需要適當的居家條件? (請考量套房 公寓 大樓 的飼養空間)</legend>
        <label><input type="radio" name="question7" value="了解"> 了解</label>
        <label><input type="radio" name="question7" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(八) 您是否同意在未取得共識之前絕不貿然認養，以免造成日後極大的心理負擔 認養犬貓的決定是否已經獲得房東/家人/室友的同意?</legend>
        <label><input type="radio" name="question8" value="同意"> 同意</label>
        <label><input type="radio" name="question8" value="不同意"> 不同意</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(九) 依照動物保護法，犬隻出入公共場所都要有飼主陪同，任意縱放犬貓在外遊蕩將會受罰 您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。</legend>
        <label><input type="radio" name="question9" value="了解"> 了解</label>
        <label><input type="radio" name="question9" value="不了解"> 不了解</label>
      </fieldset>
      <hr>
      <fieldset>
        <legend>(十) 如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費。</legend>
        <label><input type="radio" name="question10" value="同意"> 同意</label>
        <label><input type="radio" name="question10" value="不同意"> 不同意</label>
      </fieldset>

      <div class="form-btn">
        <button type="submit">確認送出</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 85vh;
  background-image: url(https://images.unsplash.com/photo-1669001247645-679497ce9368?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: bottom 5px;
  margin-bottom: 50px;

  h1 {
    text-align: center;
    padding-top: 100px;
    text-shadow: 4px 4px #acaaaa;
    color: white;
    font-size: 48px;
    font-weight: bold;
  }
}

.section-adopt {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 15%;

  .pet-data {
    .pet-pic {
      width: 200px;
      margin-bottom: 10px;

      img {
        width: 100%;
        border-radius: 30px;
      }
    }

    .pet-info {
      line-height: 2;
      padding-left: 15%;
    }
  }

  .adopt-form {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .form-wrap {
      display: flex;
      align-items: center;

      label {
        width: 20%;
      }

      input {
        width: 70%;
        padding: 10px;
        border-radius: 30px;
        background-color: #E7E2DA;
        border: 0;

        &:hover,
        &:focus {
          background-color: #FFC408;
        }
      }
    }


  }

}

.section-survey {
  width: 1200px;
  margin: 0 auto;
  line-height: 2;
  margin-bottom: 50px;

  .adopt-survey {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-left: 18%;
  }

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #D5B88E;
    border-radius: 50%;
    outline: none;
    margin-right: 5px;
    vertical-align: baseline;
    position: relative;
    cursor: pointer;
    &:checked {
    border-color: #D5B88E;
    background-color: #fff;
    }
    &:checked:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #D5B88E;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}
  }

  .form-btn {
    text-align: center;

    button {
      &:hover {
        background-color: #FFC408;
      }

      background-color: #D5B88E;
      color: white;
      border: 0;
      border-radius: 30px;
      cursor: pointer;
      padding: 10px;
      width: 20%;
      font-size: 20px;
    }
  }
}
</style>