<template>
  <v-col cols="12" sm="3" md="3" bg="3">
    <v-card
      v-for="item in restaurants"
      :key="item.id"
      class="restaurant-info-card"
    >
      <h3>{{ item.name }}</h3>
      <p>餐廳地址:{{ item.location }}</p>
      <p>推薦美食:{{ item.food }}</p>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Map",
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.restaurant-info-card {
  padding: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: start;
}
</style>
