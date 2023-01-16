<script setup lang="ts">
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    name: string;
    img: string;
    rating: number;
    index: number;
  }>(),
  {
    rating: 10,
  }
);
// const props = defineProps({
//   name:{
//     type:String,
//     required:true
//   },
//   img:{
//     type:String,
//     required:true
//   },
//   rating:{
//     type:Number,
//     required:true,
//     default:10
//   },
// })
const emits = defineEmits<{
  (e: "change", index: number, rating: number): void;
}>();
const count = ref(props.rating);
const inc = () => {
  count.value++;
  emits("change", props.index, count.value);
};

const dec = () => {
  if (count.value <= 0) {
    count.value = 0;
  } else {
    count.value--;
  }

  emits("change", props.index, count.value);
};
</script>
<template>
  <div>
    <v-card class="mx-auto" max-width="344" variant="outlined">
      <v-img :src="props.img" height="200px" />
      <v-card-item>
        <div class="text-center">
          <!-- <div class="text-overline mb-1">
          Head
        </div> -->
          <div class="text-h6 mb-1">
            {{ props.name }}
          </div>
          <div class="text-caption">Score: {{ count }}</div>
        </div>
      </v-card-item>

      <v-card-actions class="justify-center">
        <v-btn variant="flat" color="error" @click="dec"> - </v-btn>
        <v-btn variant="flat" color="success" @click="inc"> + </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
