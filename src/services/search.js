import peopleData from '../data/people.json'
import companiesData from '../data/companies.json'
import productsData from '../data/products.json'
import locationsData from '../data/locations.json'

const searchConfig = {
  people: ['firstName', 'lastName', 'bio'],
  companies: ['name', 'catchPhrase', 'buzzPhrase'],
  products: ['name', 'description', 'material'],
  locations: ['county', 'city', 'street', 'zipCode', 'buildingNumber']
}

const categoriesData = {
  people: peopleData,
  companies: companiesData,
  products: productsData,
  locations: locationsData
}

function filterResults(data, searchTerm, categoryName) {
  const propertiesToSearch = searchConfig[categoryName] || []

  return data.filter((item) =>
    propertiesToSearch.some((property) =>
      item[property].toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
}

export function searchCategory(selectedCategory, searchTerm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedCategory === 'all') {
        const allResults = {}

        Object.keys(categoriesData).forEach((categoryName) => {
          const data = filterResults(categoriesData[categoryName], searchTerm, categoryName)
          allResults[categoryName] = { data: data.slice(0, 3), totalCount: data.length }
        })

        resolve(allResults)
      } else {
        if (!categoriesData[selectedCategory]) {
          reject(new Error(`Category not found: ${selectedCategory}`))
        }

        const data = filterResults(categoriesData[selectedCategory], searchTerm, selectedCategory)
        const results = { [selectedCategory]: { data, totalCount: data.length } }
        resolve(results)
      }
    }, 200)
  })
}

export function getAllCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.keys(categoriesData))
    }, 200)
  })
}
