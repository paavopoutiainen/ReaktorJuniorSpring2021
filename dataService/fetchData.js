const axios = require('axios')
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const productCategories = ['jackets', 'shirts', 'accessories']

/*
  fetchProductsData returns
  {
    jackets: [{}, ...],
    shirts: [{}, ...],
    accessories: [{}, ...]
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
  const allProductManufacturers = [...new Set(productsDataAsArray.flat().map((product) => product.manufacturer))]
  return allProductManufacturers
}

const retry = async (functionToTry, numberOfRetries) => {
  let lastError
  for (let i = 0; i < numberOfRetries; i++) {
    try {
      console.log("Trying to fetch manufacturers", i)
      const data = await functionToTry()
      console.log("Fetch succeeded")
      return data
    } catch (e) {
      console.log("[] issue faced and is dealt with")
      lastError = e
    }
  }
  return lastError
}

const getAvailabilityByManufacturer = async (manufacturerNames) => {
  let availabilityDataByManufacturer = {}
    await Promise.all(manufacturerNames.map( async (manufacturer) => {
      const availabilityData = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
      if (availabilityData.data.response === "[]") {
        throw new Error("[] issue")
      }
      availabilityDataByManufacturer[manufacturer] = availabilityData.data.response
    }))
    return availabilityDataByManufacturer
}

const getAvailabilityFieldOfProduct = (productId, availabilityOfManufacturer) => {
  const availabilityOfProduct = availabilityOfManufacturer.find((row) => row.id.toLowerCase() === productId)
  let availabilityValue = availabilityOfProduct.DATAPAYLOAD.substring(31, availabilityOfProduct.DATAPAYLOAD.length - 31)
  switch(availabilityValue) {
    case "INSTOCK":
      availabilityValue = "IN STOCK"
      break
    case "LESSTHAN10":
      availabilityValue = "LESS THAN 10"
      break
    case "OUTOFSTOCK":
      availabilityValue = "OUT OF STOCK"
      break
    default:
  }
  return availabilityValue
}

const prettifyProduct = (product) => {
  let copy = JSON.parse(JSON.stringify(product))
  copy.manufacturer = product.manufacturer.charAt(0).toUpperCase() + product.manufacturer.slice(1)
  copy.color = product.color.map((color) => color.charAt(0).toUpperCase() + color.slice(1)).join(", ")
  return copy
}

const mapAvailabilityIntoProducts = (productsDataByCategory, availabilityDataByManufacturer) => {
  let productsDataWithAvailabilityField = {}
  for (let [key, value] of Object.entries(productsDataByCategory)) {
    const productsOfCertainCategoryWithAvailability = value.map((product) => {
      const availabilityOfProduct = getAvailabilityFieldOfProduct(product.id, availabilityDataByManufacturer[product.manufacturer])
      const prettifiedProduct = prettifyProduct(product)
      
      return { ...prettifiedProduct, availability: availabilityOfProduct }
    })
    productsDataWithAvailabilityField[key] = productsOfCertainCategoryWithAvailability
  }
  return productsDataWithAvailabilityField
}

const cacheTheData = (productsByCategoryWithAvailability) => {
  myCache.set("products", productsByCategoryWithAvailability)
  /*
  for (let [key, value] of Object.entries(productsByCategoryWithAvailability)) {
    myCache.set(key, value)
  }
  */
}

const startFetchingData = async () => {
  setTimeout(() => {
    startFetchingData()
  }, 300000)
  try {
    const productsDataByCategory = await fetchProductsData()
    const manufacturerNames = figureOutManufacturerNames(productsDataByCategory)

    const getAvailabilityDataSafely = () => retry(() => getAvailabilityByManufacturer(manufacturerNames), 10)
    const availabilityDataByManufacturer = await getAvailabilityDataSafely()

    const productsByCategoryWithAvailability = mapAvailabilityIntoProducts(productsDataByCategory, availabilityDataByManufacturer)
    cacheTheData(productsByCategoryWithAvailability)
    return new Promise((resolve) => resolve())
  } catch (e) {
    console.error(e)
    return new Promise((resolve, reject) => reject(e))
  }
}

module.exports = {
  startFetchingData, myCache
}