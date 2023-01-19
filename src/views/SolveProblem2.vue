<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<script setup lang="ts">
import { computed, ref } from "vue";
const num = ref(0);
const list = ref([0]);
const calLoop = computed(() => {
  list.value = [];
  if (num.value === 0 || !num.value) {
    list.value = [];
    return list.value;
  }
  for (let i = 0; i < num.value; i++) {
    list.value.push(i + 1);
  }
  return list.value;
});
</script>

<template>
  <div style="padding: 50px">
    <v-row>
       <!-- fixlable -->
      <v-text-field
        v-model="num"
        :rules="[(v) => !!v || 'Number is not empty!!']"
        label="Please input Number"
        required
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col cols="12" md="1" v-for="item in calLoop" :key="item">{{
        item
      }}</v-col>
    </v-row>
  </div>
</template>
