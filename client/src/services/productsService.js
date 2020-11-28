import axios from "axios"
const baseUrl = "https://evening-ridge-26628.herokuapp.com/products"

export const fetchProductsData = async () => {
    const response = await axios.get(baseUrl)
    console.log(response)
    return response.data
  }