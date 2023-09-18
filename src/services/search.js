import peopleData from '../data/people.json'
import companiesData from '../data/companies.json'
import productsData from '../data/products.json'
import locationsData from '../data/locations.json'

const searchConfig = {
  people: ['firstName', 'lastName', 'bio'],
  companies: ['name', 'catchPhrase', 'buzzPhrase'],
  products: ['product', 'productDescription', 'productMaterial'],
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

function searchCategory(categoryName, searchTerm) {
  return new Promise((resolve, reject) => {
    if (categoryName === 'all') {
      const allResults = {}

      Promise.all(
        Object.keys(categoriesData).map(async (category) => {
          const data = filterResults(categoriesData[category], searchTerm, category)
          allResults[category] = { data: data.slice(0, 3), totalCount: data.length }
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
        const data = filterResults(categoriesData[categoryName], searchTerm, categoryName)
        const results = { [categoryName]: { data, totalCount: data.length } }
        resolve(results)
      }
    }
  })
}

export default searchCategory
