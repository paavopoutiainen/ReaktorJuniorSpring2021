const axios = require('axios')

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

const startFetchingData = async () => {
  try {
    const productsDataByCategory = await fetchProductsData()
    const manufacturerNames = figureOutManufacturerNames(productsDataByCategory)
    const availabilityDataByManufacturer = await getAvailabilityByManufacturer(manufacturerNames)

    const finalProducts = mapAvailabilityIntoProducts(productsDataByCategory, availabilityDataByManufacturer)
    //console.log(finalProducts.accessories[333])
    return finalProducts
  } catch (e) {
    console.error(e)
    return new Promise((resolve, reject) => reject(err))
  }
}


module.exports = {
  startFetchingData
}