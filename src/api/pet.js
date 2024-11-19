import axios from "axios";

export const petApi = {
  getPets: async () => {
    const { data } = await axios.get("/mock/pets");
    return data;
  },
};