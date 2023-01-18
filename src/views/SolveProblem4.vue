<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import SecondComponent from "@/components/SecondComponent.vue";
import FirstComponent from "@/components/FirstComponent.vue";
import { computed, ref } from "vue";

</script>
<template>
  <div>
    <v-row >
      <v-col style="margin-top: 30vh;margin-left: 30vh;">
        <FirstComponent></FirstComponent>
      </v-col>
      <v-col style="margin-top: 30vh;margin-left: 30vh;">
        <SecondComponent></SecondComponent>
      </v-col>
    </v-row>
  </div>
</template>
