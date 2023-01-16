import { ref } from "vue";
import { defineStore } from "pinia";
import type Menu from "./types/Menu.type";

export const useMenuStore = defineStore("menu", () => {
  const products = ref<Menu[]>(
    Array.from(Array(100).keys()).map((item) => {
      return {
        id: item,
        name: "Product " + (item + 1),
        price: (Math.floor(Math.random() * 100) + 1) * 10,
        unit: 0,
      };
    })
  );
  return { products };
});
