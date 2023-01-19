<script lang="ts" setup>
import { ref } from "vue";
const img = ref("../../feeling_imgs/smile.png");
const text = ref("Smile");
const list = ref([
  {
    title: "ANGRY",
    name: "Angry",
    img: "../../feeling_imgs/angry.png",
    color: "",
  },
  {
    title: "CUTE",

    name: "Cute",
    img: "../../feeling_imgs/cute.png",
    color: "",
  },
  {
    title: "EXCITED",

    name: "Excited",
    img: "../../feeling_imgs/excited.png",
    color: "",
  },
  {
    title: "PAIN",

    name: "Pain",
    img: "../../feeling_imgs/pain.png",
    color: "",
  },
  {
    title: "SHOCKED",

    name: "Shocked",
    img: "../../feeling_imgs/shocked.png",
    color: "",
  },
  {
    title: "SMILE",
    name: "Smile",
    img: "../../feeling_imgs/smile.png",
    color: "yellow",
  },
]);
const changeEmoji = (name: string) => {
  if (name === "ANGRY") {
    img.value = list.value[0].img;
    text.value = list.value[0].name;
  } else if (name === "CUTE") {
    img.value = list.value[1].img;
    text.value = list.value[1].name;
  } else if (name === "EXCITED") {
    img.value = list.value[2].img;
    text.value = list.value[2].name;
  } else if (name === "PAIN") {
    img.value = list.value[3].img;
    text.value = list.value[3].name;
  } else if (name === "SHOCKED") {
    img.value = list.value[4].img;
    text.value = list.value[4].name;
  } else if (name === "SMILE") {
    img.value = list.value[5].img;
    text.value = list.value[5].name;
  }
  list.value[5].color = "";
};
</script>
<template>
  <div>
    <v-row>
      <v-col style="width: 50vh">
        <v-img
          style="width: 50%; padding-top: 50vh; left: 30%"
          :src="img"
        ></v-img>
      </v-col>
      <v-col style="width: 50vh; margin: auto 0">
        <v-row>
          <h1 class="btnwidth" style="text-align: center">
            {{ text }}
          </h1>
        </v-row>
        <v-row v-for="(set, index) of list" :key="index"
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(set.title)"
            :color="set.color"
            >{{ set.title }}</v-btn
          ></v-row
        >
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.btnwidth {
  width: 80%;
  margin: 10px 0;
}
.btnwidth:focus{
  background-color: yellow;
}
</style>
