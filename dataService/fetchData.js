const axios = require('axios')
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const productCategories = ['jackets', 'shirts', 'accessories']


/*
  returns
  {
    jackets: [],
    shirts: [],
    accessories: []
  }
*/
const fetchProductsData = async () => {
  try {
    let productsDataByCategory = {}
    await Promise.all(productCategories.map( async (productCategory) => {
        const productData = await axios.get(`https://bad-api-assignment.reaktor.com/products/${productCategory}`)
        productsDataByCategory[productCategory] = productData.data
      })
    )
    return productsDataByCategory
  } catch (e) {
    console.error(e)
  }
  
}

const figureOutManufacturerNames = (productsData) => {
  const productsDataAsArray = Object.values(productsData)
  const allProductManufacturers = Array.from(new Set(productsDataAsArray.flat().map((product) => product.manufacturer)))
  return allProductManufacturers
}

const getAvailabilityByManufacturer = async (manufacturerNames) => {
  let availabilityDataByManufacturer = {}
  try {
    await Promise.all(manufacturerNames.map( async (manufacturer) => {
      const availabilityData = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
      availabilityDataByManufacturer[manufacturer] = availabilityData.data.response
    }))
    return availabilityDataByManufacturer
  } catch(e) {
    console.error(e)
  }
  
}

const getAvailabilityFieldOfProduct = (productId, availabilityOfManufacturer) => {
  const availabilityOfProduct = availabilityOfManufacturer.find((row) => row.id.toLowerCase() === productId).DATAPAYLOAD
  return availabilityOfProduct
}

const mapAvailabilityIntoProducts = (productsDataByCategory, availabilityDataByManufacturer) => {
  let productsDataWithAvailabilityField = {}
  for (let [key, value] of Object.entries(productsDataByCategory)) {
    const newValue = value.map((product) => {
      const availabilityOfProduct = getAvailabilityFieldOfProduct(product.id, availabilityDataByManufacturer[product.manufacturer])
      return { ...product, availability: availabilityOfProduct }
    })
    productsDataWithAvailabilityField[key] = newValue
  }
  return productsDataWithAvailabilityField
}

const cacheTheData = (productsByCategoryWithAvailability) => {
  for (let [key, value] of Object.entries(productsByCategoryWithAvailability)) {
    myCache.set(key, value)
  }
}

const fetchData = async () => {
  setTimeout(() => {
    fetchData()
  }, 300000)
  try {
    const productsDataByCategory = await fetchProductsData()
    const manufacturerNames = figureOutManufacturerNames(productsDataByCategory)
    const availabilityDataByManufacturer = await getAvailabilityByManufacturer(manufacturerNames)

    const productsByCategoryWithAvailability = mapAvailabilityIntoProducts(productsDataByCategory, availabilityDataByManufacturer)
    cacheTheData(productsByCategoryWithAvailability)
    return new Promise((resolve) => resolve())
  } catch (e) {
    console.error(e)
    return new Promise((resolve, reject) => reject(err))
  }
}


module.exports = {
  fetchData, myCache
}