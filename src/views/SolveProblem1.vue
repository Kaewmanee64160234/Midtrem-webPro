<script lang="ts" setup>
import { ref } from "vue";
const img = ref("../../feeling_imgs/smile.png");
const text = ref("Smile");
const colot_btn = ref("");
const list = [
  {
    name: "Angry",
    img: "../../feeling_imgs/angry.png",
    color: "",
  },
  {
    name: "Cute",
    img: "../../feeling_imgs/cute.png",
    color: "",
  },
  {
    name: "Excited",
    img: "../../feeling_imgs/excited.png",
    color: "",
  },
  {
    name: "Pain",
    img: "../../feeling_imgs/pain.png",
    color: "",
  },
  {
    name: "Shocked",
    img: "../../feeling_imgs/shocked.png",
    color: "",
  },
  {
    name: "Smile",
    img: "../../feeling_imgs/smile.png",
    color: "",
  },
];
const changeEmoji = (name: string) => {
  if (name == "ANGRY") {
    img.value = list[0].img;
    text.value = list[0].name;
    list[0].color = "background-color: yellow";
  } else if (name == "CUTE") {
    img.value = list[1].img;
    text.value = list[1].name;
    list[1].color = "background-color: yellow";
  } else if (name == "EXCITED") {
    img.value = list[2].img;
    text.value = list[2].name;
    list[2].color = "background-color: yellow";
  } else if (name == "PAIN") {
    img.value = list[3].img;
    text.value = list[3].name;
    list[3].color = "background-color: yellow";
  } else if (name == "SHOCKED") {
    img.value = list[4].img;
    text.value = list[4].name;
    list[4].color = "background-color: yellow";
  } else if (name == "SMILE") {
    img.value = list[5].img;
    text.value = list[5].name;
    list[5].color = "background-color: yellow";
  }
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
      <v-col style="width: 50vh; padding-top: 25vh">
        <v-row
          ><h1 class="btnwidth" style="text-align: center">
            {{ text }}
          </h1></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`ANGRY`)"
            :style="list[0].color"
            >ANGRY</v-btn
          ></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`CUTE`)"
            :style="list[1].color"
            >CUTE</v-btn
          ></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`EXCITED`)"
            :style="list[2].color"
            >EXCITED</v-btn
          ></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`PAIN`)"
            :style="list[3].color"
            >PAIN</v-btn
          ></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`SHOCKED`)"
            :style="list[4].color"
            >SHOCKED</v-btn
          ></v-row
        >
        <v-row
          ><v-btn
            class="btnwidth"
            @click="changeEmoji(`SMILE`)"
            :style="list[5].color"
            >SMILE</v-btn
          ></v-row
        >
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.btnwidth {
  width: 80%;
  margin-top: 10px;
}
</style>
