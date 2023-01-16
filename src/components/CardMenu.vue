<script setup lang="ts">
import { useCartStore } from "@/stores/cart.store";
import type Menu from "@/stores/types/Menu.type";
const useCart = useCartStore();
const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  img: String,
});

const emit = defineEmits<{
  (e: "change", menu: Menu): void;
}>();
</script>
<template>
  <div>
    <v-card variant="outlined" style="height: 250px; cursor: pointer">
      <img
        style="height: 50%; object-fit: cover; width: 250px"
        src="https://i.pinimg.com/736x/98/ef/cd/98efcdf32070cd2d38f986d3e368b653.jpg"
      />
      <div>
        <v-card-text style="text-align: center; cursor: pointer">
          <div class="font-weight-bold">
            {{ props.title }}
          </div>
          <strong>{{ props.price }}</strong>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
