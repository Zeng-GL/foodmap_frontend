const axios = require("axios");

// export async function getAllPost(){
//     const response = await axios.get('/api/posts');
//     return response.data;
// }

export async function fetchRestaurants() {
  try {
    const response = await axios.get("/api/restaurant");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
