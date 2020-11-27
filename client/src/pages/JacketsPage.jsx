import React from 'react'
import useSWR from "swr"
import { fetchProductsData } from "../services/productsService"

const JacketsPage = () => {
  const {data: productsData} = useSWR("/products", fetchProductsData)

  if (!productsData) return <div>loading...</div>

    return (
        <div>
          <h1>Jackets</h1>
          <div>
              {productsData && productsData.jackets.map(item => {
                  return <p key={item.id}>{item.name}</p>
              })}
          </div>
        </div>
    )
}

export default JacketsPage