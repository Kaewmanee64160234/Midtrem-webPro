<script lang="ts" setup>
import { ref } from "vue";

const products = ref(
  Array.from(Array(100).keys()).map((item) => {
    return {
      id: item,
      name: "Product " + (item + 1),
      price: (Math.floor(Math.random() * 100) + 1) * 10,
    };
  })
);
</script>
<template>
  <div>
    {{ products }}
  </div>
</template>
