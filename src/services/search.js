import peopleData from '../data/people.json'
import companiesData from '../data/companies.json'
import productsData from '../data/products.json'
import locationsData from '../data/locations.json'
import categories from '../data/categories.json'

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

        categories.forEach(({ value, label }) => {
          const data = filterResults(categoriesData[value], searchTerm, value)
          allResults[value] = { data: data.slice(0, 3), totalCount: data.length, label }
        })

        resolve(allResults)
      } else {
        const category = categories.find((item) => item.value === selectedCategory)

        if (!category) {
          reject(new Error(`Category "${selectedCategory}" not found`))
          return
        }

        const data = filterResults(categoriesData[selectedCategory], searchTerm, selectedCategory)
        const results = {
          [category.value]: { data, totalCount: data.length, label: category.label }
        }
        resolve(results)
      }
    }, 200)
  })
}

export function getAllCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories)
    }, 200)
  })
}
