const searchConfig = {
  people: ['firstName', 'lastName', 'bio'],
  companies: ['name', 'catchPhrase', 'buzzPhrase'],
  products: ['product', 'productDescription', 'productMaterial'],
  locations: ['county', 'city', 'street', 'zipCode', 'buildingNumber']
}

import peopleData from '../data/people.json'
import companiesData from '../data/companies.json'
import productsData from '../data/products.json'
import locationsData from '../data/locations.json'

const categoriesData = {
  people: peopleData,
  companies: companiesData,
  products: productsData,
  locations: locationsData
}

function filterAndMapResults(data, searchTerm, categoryName) {
  const propertiesToSearch = searchConfig[categoryName] || []

  return data.filter((item) =>
    propertiesToSearch.some((property) =>
      item[property].toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
}

function searchCategory(categoryName, searchTerm) {
  return new Promise((resolve, reject) => {
    if (categoryName === 'all') {
      const allResults = {}

      Promise.all(
        Object.keys(categoriesData).map(async (category) => {
          allResults[category] = filterAndMapResults(categoriesData[category], searchTerm, category)
        })
      )
        .then(() => {
          resolve(allResults)
        })
        .catch((error) => {
          reject(error)
        })
    } else {
      const categoryData = categoriesData[categoryName]

      if (!categoryData) {
        reject(new Error(`Category not found: ${categoryName}`))
      } else {
        const results = filterAndMapResults(categoryData, searchTerm, categoryName)
        resolve(results)
      }
    }
  })
}

export default searchCategory
