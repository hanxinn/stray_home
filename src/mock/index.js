import Mock from "mockjs";
import pets from "./data/pets.json"

Mock.mock('/mock/pets', { // 3. 傳遞給前端數據
  code: 200,
  data: pets
})