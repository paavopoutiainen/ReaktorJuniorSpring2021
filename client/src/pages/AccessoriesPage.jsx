import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"

const AccessoriesPage = ({data}) => {
    const {data: productsData} = useSWR("/products", fetchProductsData)
    if (!productsData) return <div>loading...</div>

    return (
        <div>
          <h1>Accessories</h1>
            {productsData && productsData.accessories.map(item => {
                return <p key={item.id}>{item.name}</p>
            })}
        </div>
    )
}

export default AccessoriesPage