import { ref } from "vue";
import { defineStore } from "pinia";
import type Menu from "./types/Menu.type";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Menu[]>([]);
  const AddToCart = (item: Menu) => {
    const repeat = cart.value.findIndex((items) => items.id == item.id);
    if (repeat >= 0) {
      item.unit += 1;
    } else if (repeat == -1) {
      item.unit += 1;
      cart.value.push(item);
    }
  };

  const AddUnit = (item: Menu) => {
    item.unit += 1;
  };
  const deleteUnit = (item: Menu) => {
    if (item.unit > 0) {
      item.unit -= 1;
    }
    if (item.unit <= 0) {
      const index = cart.value.findIndex((items) => items.id == item.id);
      cart.value.splice(index, 1);
    }
  };
  const deleteList = (item: Menu) => {
    const index = cart.value.findIndex((items) => items.id == item.id);
    cart.value.splice(index, 1);
  };
  return { cart, AddToCart, AddUnit, deleteUnit, deleteList };
});
