<script setup lang="ts">
import { RouterView } from "vue-router";
import {
  mdiNumeric1,
  mdiNumeric2,
  mdiNumeric3,
  mdiNumeric4,
  mdiHeadQuestion,
} from "@mdi/js";
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Midterm Problems</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail>
      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="mdiHeadQuestion"
          title="Problems"
          class="text-body"
          to="/"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiNumeric1"
          title="Problem 1"
          class="text-body"
          to="/solve-problem-1"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiNumeric2"
          title="Problem 2"
          class="text-body"
          to="/solve-problem-2"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiNumeric3"
          title="Problem 3"
          class="text-body"
          to="/solve-problem-3"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiNumeric4"
          title="Problem 4"
          class="text-body"
          to="/solve-problem-4"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style></style>
