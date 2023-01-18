<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const useCounter = useCounterStore();

</script>
<template>
  <v-card variant="outlined" style="text-align: center; width: 40vh; padding: 20px;">
    <h1>Forst Component</h1>
    <h1>{{ useCounter.doubleCount }}</h1>
    <v-btn class="mt-5" @click="useCounter.decrease">DECREASE</v-btn>
  </v-card>
</template>
