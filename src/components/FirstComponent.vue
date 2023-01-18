<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const useCounter = useCounterStore();

</script>
<template>
  <v-card
    variant="outlined"
    style="text-align: center; width: 40vh; padding: 20px"
  >
    <h1>First Component</h1>
    <h1>{{ useCounter.count }}</h1>
    <v-btn class="mt-5" @click="useCounter.increment">INCREMENT</v-btn>
  </v-card>
</template>
