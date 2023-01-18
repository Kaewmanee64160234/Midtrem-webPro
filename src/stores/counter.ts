import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrease() {
    if (count.value > 0) {
      count.value--;
    } else {
      count.value = 0;
    }
  }
  return { count, doubleCount, increment, decrease };
});
