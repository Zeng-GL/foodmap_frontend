const axios = require("axios");

export async function fetchRestaurants() {
  try {
    const response = await axios.get("https://foodmap99.herokuapp.com/api/restaurant");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createRestaurants(val){
  try {
    const r = {
      name: val.name,
      lat: val.lat,
      lng: val.lng,
      location: val.location,
      food: val.food,
    }
    const response = await axios.post("https://foodmap99.herokuapp.com/api/restaurant",r);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
