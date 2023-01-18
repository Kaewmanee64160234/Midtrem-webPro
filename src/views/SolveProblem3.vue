<script lang="ts" setup>
import { computed, ref } from "vue";
import type Menu from "@/stores/types/Menu.type";
const products = ref(
  Array.from(Array(100).keys()).map((item) => {
    return {
      id: item,
      name: "Product " + (item + 1),
      price: (Math.floor(Math.random() * 100) + 1) * 10,
      unit: 0,
    };
  })
);
const cart = ref<Menu[]>([]);
const AddToCart = (item: Menu) => {
  const repeat = cart.value.findIndex((items) => items.id == item.id);
  if (repeat >= 0) {
    item.unit += 1;
  } else if (repeat == -1) {
    item.unit += 1;
    cart.value.push(item);
  }
};

const AddUnit = (item: Menu) => {
  item.unit += 1;
};
const deleteUnit = (item: Menu) => {
  if (item.unit > 0) {
    item.unit -= 1;
  }
  if (item.unit <= 0) {
    const index = cart.value.findIndex((items) => items.id == item.id);
    cart.value.splice(index, 1);
  }
};
const deleteList = (item: Menu) => {
  const index = cart.value.findIndex((items) => items.id == item.id);
  cart.value.splice(index, 1);
};
const calculate = computed(() => {
  if (cart.value.length < 1) {
    return 0;
  }
  return cart.value.reduce((total, menu) => total + menu.price * menu.unit, 0);
});
</script>
<template>
  <div>
    <div class="Point-of-sale">
      <v-row>
        <h1 style="margin-left: 20px; margin-top: 10px">Point Of sale</h1>
      </v-row>
      <v-row>
        <v-col class="menu-zone">
          <v-row class="pa-1" style="overflow-y: scroll; max-height: 100vh">
            <v-col
              cols="12"
              md="4"
              v-for="(menu, index) in products"
              :key="index"
            >
              <v-card style="height: 300px; cursor: pointer">
                <img
                  style="height: 50%; object-fit: cover; width: 100%"
                  src="https://i.imgflip.com/443119.png"
                />
                <div>
                  <v-card-text style="text-align: center; cursor: pointer">
                    <div class="font-weight-bold">
                      {{ menu.name }}
                    </div>
                    <strong>{{ menu.price }}</strong>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" @click="AddToCart(menu)"
                      >Add to Cart</v-btn
                    >
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="cal-zone">
          <v-row style="overflow-y: scroll; max-height: 50vh">
            <v-container>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-center">id</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">pice</th>
                    <th class="text-center">Price</th>
                    <th colspan="2" class="text-center">Operation</th>
                  </tr>
                </thead>
                <tbody v-if="cart.length > 0">
                  <tr
                    v-for="(item, index) of cart"
                    :key="item.id"
                    style="text-align: center"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                      <v-btn
                        icon
                        color="secondary "
                        class="ma-2"
                        @click="AddUnit(item)"
                        >+</v-btn
                      >
                      {{ item.unit }}
                      <v-btn
                        icon
                        color="error"
                        @click="deleteUnit(item)"
                        class="ma-2"
                        >-</v-btn
                      >
                    </td>
                    <td>{{ item.price }}</td>
                    <td>
                      <v-btn color="error" @click="deleteList(item)"
                        >Delete</v-btn
                      >
                    </td>
                    <td><v-btn color="#FFDE03">Edit</v-btn></td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="5" style="text-align: center">No Data</td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>
          </v-row>
          <v-row height="30%">
            <v-container class="mt-5">
              <h2>total:{{ calculate }} Bath</h2></v-container
            >
          </v-row>
          <v-row height="20%"></v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
