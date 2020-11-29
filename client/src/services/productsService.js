import axios from "axios"
const baseUrl = process.env.NODE_ENV === 'production' ? "https://evening-ridge-26628.herokuapp.com/products" : "http://localhost:3001/products"

export const fetchProductsData = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }