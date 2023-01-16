<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import SecondComponent from "@/components/SecondComponent.vue";
import FirstComponent from "@/components/FirstComponent.vue";
import { computed, ref } from "vue";
const changeRating = (index: number, rating: number) => {
  console.log("action -> " + index + " : " + rating);
  lists.value[index].rating = rating;
};


const lists = ref([
  {
    name: "Vue js",
    img: "https://cdn.iconscout.com/icon/free/png-256/vue-282497.png",
    rating: 0,
  },
  {
    name: "Angular",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    rating: 0,
  },
]);
</script>
<template>
  <div>
    <v-row>
      <v-col
        ><FirstComponent
          :name="lists[0].name"
          :img="lists[0].img"
          :rating="lists[0].rating"
          :index="1"
          @change="changeRating"
        ></FirstComponent
      ></v-col>
      <v-col
        ><SecondComponent
          :name="lists[1].name"
          :img="lists[1].img"
          :rating="lists[1].rating"
          :index="2"
          @change="changeRating"
        ></SecondComponent
      ></v-col>
    </v-row>
  </div>
</template>
