import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"

const ShirtsPage = () => {
    const {data: productsData} = useSWR("/products", fetchProductsData)
    if (!productsData) return <div>loading...</div>

    return (
      <div>
        <h1>Shirts</h1>
        <div>
            {productsData && productsData.shirts.map(item => {
                return <p key={item.id}>{item.name}</p>
            })}
        </div>
      </div>
    )
}

export default ShirtsPage