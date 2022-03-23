<template>
  <v-container fluid class="container-fluid">
    <v-row>
      <v-col cols="12" sm="9" md="9" bg="9">
        <Map :restaurants="restaurants" />
      </v-col>
      <v-col cols="12" sm="3" md="3" bg="3">
        <Information
          :restaurants="restaurants"
          @addRestaurant="addRestaurant"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchRestaurants } from "../services/service.js";
import { createRestaurants } from "../services/service.js";
// import axios from "axios";
import Map from "./Map.vue";
import Information from "./Information.vue";

export default {
  name: "Main",
  components: {
    Map,
    Information,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async getAllRestaurants() {
      this.restaurants = await fetchRestaurants();
    },
    async addRestaurant(val) {
      await createRestaurants(val);
      this.getAllRestaurants();
    },
  },
  created() {
    this.getAllRestaurants();
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  padding: 0rem;
  margin: 0rem;
  overflow: hidden;
}
</style>
