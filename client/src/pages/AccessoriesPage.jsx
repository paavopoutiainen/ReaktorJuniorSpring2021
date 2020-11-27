import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"
import ProductTable from "../components/ProductTable"

const AccessoriesPage = ({data}) => {
    const {data: productsData} = useSWR("/products", fetchProductsData)
    if (!productsData) return <div>loading...</div>

    return (
        <div>
            <h1>Accessories</h1>
            {productsData &&  <ProductTable data={productsData.accessories}/>}
        </div>
    )
}

export default AccessoriesPage