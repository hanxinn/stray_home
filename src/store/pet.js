import { defineStore } from "pinia";
import { ref } from "vue";

export const usePetStore = defineStore(
  "pet",
  () => {
    const pets = ref([]);
    const setPets = (newPets) => {
      pets.value = newPets;
    };

    return {
      pets,
      setPets,
    };
  },
  {
    persist: true,
  }
);
