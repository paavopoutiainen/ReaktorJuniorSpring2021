import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"
import ProductTable from "../components/ProductTable"

const ShirtsPage = () => {
    const {data: productsData} = useSWR("/products", fetchProductsData)
    if (!productsData) return <div>loading...</div>

    return (
      <div>
        <h1>Shirts</h1>
        {productsData &&  <ProductTable data={productsData.shirts}/>}
      </div>
    )
}

export default ShirtsPage