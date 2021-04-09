
import axios from "axios";



// eslint-disable-next-line 
export default {
  getRandomCat: function() {
    return axios.get("https://api.thecatapi.com/v1/images/search");
  },
  getCatsOfBreed: function(breed) {
    return axios.get("https://api.thecatapi.com/v1/breeds/search}");

  },
  getBaseBreedsList: function() {
    return axios.get("https://api.thecatapi.com/v1/breeds");
  }
};
