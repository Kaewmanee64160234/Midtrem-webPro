<script lang="ts" setup>
import { computed } from "vue";
import CardMenu from "@/components/CardMenu.vue";
import { useMenuStore } from "@/stores/menu.store";
import { useCartStore } from "@/stores/cart.store";
const useMenu = useMenuStore();
const useCart = useCartStore();

const calculate = computed(() => {
  if (useCart.cart.length < 1) {
    return 0;
  }
  return useCart.cart.reduce(
    (total, menu) => total + menu.price * menu.unit,
    0
  );
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
              v-for="(menu, index) in useMenu.products"
              :key="index"
            >
              <CardMenu
                :title="menu.name"
                :price="menu.price"
                @click="useCart.AddToCart(menu)"
              ></CardMenu>
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
                <tbody>
                  <tr
                    v-for="(item, index) of useCart.cart"
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
                        @click="useCart.AddUnit(item)"
                        >+</v-btn
                      >
                      {{ item.unit }}
                      <v-btn
                        icon
                        color="error"
                        @click="useCart.deleteUnit(item)"
                        class="ma-2"
                        >-</v-btn
                      >
                    </td>
                    <td>{{ item.price }}</td>
                    <td>
                      <v-btn color="error" @click="useCart.deleteList(item)"
                        >Delete</v-btn
                      >
                    </td>
                    <td><v-btn color="#FFDE03">Edit</v-btn></td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>
          </v-row>
          <v-row height="30%">
            <v-container> total:{{ calculate }} </v-container>
          </v-row>
          <v-row height="20%"></v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
