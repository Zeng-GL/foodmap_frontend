<template>
  <v-container fluid class="container-fluid">
    <v-row>
      <Map :restaurants="restaurants" />
      <Information :restaurants="restaurants" />
    </v-row>
  </v-container>
</template>

<script>
// import { fetchRestaurants } from "../services/service.js";
import axios from "axios";
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
      // this.restaurants = await fetchRestaurants();
      axios.get("https://foodmap99.herokuapp.com/api/restaurant")
      .then(res=>{
        this.restaurants = res.data
      })
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
