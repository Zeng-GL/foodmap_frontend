const axios = require("axios");

export async function fetchRestaurants() {
  try {
    const response = await axios.get("https://foodmap99.herokuapp.com/api/restaurant");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
