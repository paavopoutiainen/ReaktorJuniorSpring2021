import React from 'react'
import useSWR from "swr"
import ProductTable from "../components/ProductTable"

const ShirtsPage = () => {
    const {data: productsData} = useSWR("/products")
    if (!productsData) return <div>loading...</div>

    return (
      <div>
        {productsData &&  <ProductTable data={productsData.shirts}/>}
      </div>
    )
}

export default ShirtsPage