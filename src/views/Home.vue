<template>
  <h1>Welcome to Search App</h1>
  <p>Please use the search bar to find results.</p>
  <div class="grid">
    <RouterLink v-for="category of categories" :to="`/${category}`">
      <CategoryCard :name="capitalizeFirstLetter(category)">
        <template v-slot:icon>
          <component :is="getIconComponent(category)" />
        </template>
      </CategoryCard>
    </RouterLink>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import CategoryCard from '../components/CategoryCard.vue'
import IconPeople from '../components/icons/IconPeople.vue'
import IconLocation from '../components/icons/IconLocation.vue'
import IconCompany from '../components/icons/IconCompany.vue'
import IconProduct from '../components/icons/IconProduct.vue'

const categories = inject('categories')

const getIconComponent = (type) => {
  switch (type) {
    case 'people':
      return IconPeople
    case 'companies':
      return IconCompany
    case 'products':
      return IconProduct
    case 'locations':
      return IconLocation
    default:
      return 'div'
  }
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
}
</style>