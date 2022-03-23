<template>
<v-app>
    <v-card
      v-for="item in restaurants"
      :key="item.id"
      class="restaurant-info-card"
    >
      <h3>{{ item.name }}</h3>
      <p>餐廳地址:{{ item.location }}</p>
      <p>推薦美食:{{ item.food }}</p>
    </v-card>

        <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          新增喜愛餐廳
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          新增喜愛餐廳
        </v-card-title>

        <v-card-text>
          <v-text-field
      v-model="form.name"
      label="餐廳名稱"
    ></v-text-field>
    <v-text-field
      v-model="form.location"
      label="餐廳地址"
    ></v-text-field>
    <v-text-field
      v-model="form.lng"
      label="經度"
    ></v-text-field>
    <v-text-field
      v-model="form.lat"
      label="緯度"
    ></v-text-field>
    <v-text-field
      v-model="form.food"
      label="特色餐點"
    ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="add"
          >
            確認新增
          </v-btn>
          <v-btn
            color="error"
            @click="dialog = false"
          >
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  <!-- </v-col> -->
</v-app>
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
  data(){
    return{
      dialog: false,
      form:{
        name:"",
        location:"",
        lng:"",
        lat:"",
        food:"",
      },
    }
  },
  methods:{
    add(){
      this.$emit("addRestaurant",this.form);
      this.dialog = false;
      alert("新增成功")
      // this.$swal({
      //   icon:"success",
      //   title:"新增成功"
      // })
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
