<template>
  <h1>Welcome to Search App</h1>
  <p>Please use the search bar to find results.</p>
  <div class="grid">
    <router-link v-for="category of categories" :to="`/${category.value}`">
      <CategoryCard :name="category.label" :description="category.description">
        <template v-slot:icon>
          <component :is="getIconComponent(category.value)" />
        </template>
      </CategoryCard>
    </router-link>
  </div>
</template>

<script setup>
import { inject } from 'vue'
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
