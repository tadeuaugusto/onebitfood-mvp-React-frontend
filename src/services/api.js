import axios from "axios";

// const baseUrl = "http://localhost:3001";
const baseUrl = "https://arcane-caverns-26717.herokuapp.com";
const url = axios.create({ baseURL: baseUrl })

export default {
  loadRestaurants: (category = null) => {
    let filter = category ? `?category=${category.title}` : ""
    return url.get(`/restaurants${filter}`)
  },
  
  loadCategories: () => url.get("/categories"),
  searchRestaurants: (search) => url.get(`/restaurants/search?q=${search}`)
}