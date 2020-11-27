import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"
import ProductTable from "../components/ProductTable"

const JacketsPage = () => {
  const {data: productsData} = useSWR("/products", fetchProductsData)

  if (!productsData) return <div>loading...</div>

    return (
        <div>
          <h1>Jackets</h1>
          {productsData &&  <ProductTable data={productsData.jackets}/>}
        </div>
    )
}

export default JacketsPage