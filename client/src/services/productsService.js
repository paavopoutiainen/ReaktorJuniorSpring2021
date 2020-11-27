import axios from "axios"
const baseUrl = "http://localhost:3001/products"

export const fetchProductsData = async () => {
    const response = await axios.get(baseUrl)
    console.log(response)
    return response.data
  }