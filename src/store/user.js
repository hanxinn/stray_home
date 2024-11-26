import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const setToken = (newToken) => {
      token.value = newToken;
    };
    const firstName = ref("");
    const setFirstName = (name) => {
      firstName.value = name;
    };

    return {
      token,
      setToken,
      firstName,
      setFirstName,
    };
  },
  {
    persist: true,
  }
);
