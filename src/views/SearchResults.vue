<template>
  <LoadingSpinner v-if="loading" />
  <ErrorAlert v-else-if="error" :message="error" />
  <div v-else class="search-results">
    <div v-for="(result, type) in searchResults" :key="type" class="search-result-box">
      <h2 class="result-type">{{ type }}</h2>
      <ul class="result-list">
        <li v-for="item in result.data" :key="item.slug" class="result-item">
          <component :is="getCardComponent(type)" :result="item" :type="type" />
        </li>
      </ul>
      <router-link
        v-if="result.data.length < result.totalCount"
        :to="`/${type}${generateSearchRoute}`"
        class="see-all-link"
      >
        See all {{ type }} results
      </router-link>
    </div>
  </div>
</template>

<script setup>
import PersonCard from '../components/PersonCard.vue'
import CompanyCard from '../components/CompanyCard.vue'
import ProductCard from '../components/ProductCard.vue'
import LocationCard from '../components/LocationCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import ErrorAlert from '../components/ErrorAlert.vue'
import { searchCategory } from '@/services/search'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  keywords: String
})

const loading = ref(true)
const error = ref(null)
const searchResults = ref({})

const generateSearchRoute = computed(() => {
  return `${props.keywords ? '/?keywords=' + props.keywords : ''}`
})

const performSearch = (selectedCategory, keywords = '') => {
  loading.value = true
  searchCategory(selectedCategory, keywords)
    .then((results) => {
      error.value = null
      searchResults.value = results
    })
    .catch((err) => {
      error.value = err
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  console.log('ALL CREATED = ', route.params.type, route.query.keywords)
  performSearch(route.params.type, route.query.keywords)
})

watch(route, () => {
  console.log('ALL WATCH = ', route.params.type, route.query.keywords)
  performSearch(route.params.type, route.query.keywords)
})

const getCardComponent = (type) => {
  switch (type) {
    case 'people':
      return PersonCard
    case 'companies':
      return CompanyCard
    case 'products':
      return ProductCard
    case 'locations':
      return LocationCard
    default:
      return 'div'
  }
}
</script>

<style scoped>
.search-result-box {
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  background-color: var(--color-background);
  box-shadow: var(--elevation-lined);
  border-radius: var(--corner-radius-medium);
}

.result-type {
  font-weight: 600;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.9);
}

.result-list {
  list-style: none;
  padding: 0;
}

.result-item {
  border-bottom: 1px solid #d1d1d1;
  padding: 1rem 0;
}

.result-item:last-child {
  border-bottom: none;
}
</style>
