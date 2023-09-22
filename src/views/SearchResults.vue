<template>
  <LoadingSpinner v-if="loading" />
  <ErrorAlert v-else-if="error" :message="error" />
  <div v-else>
    <div v-for="(result, type) in searchResults" :key="type" class="search-results">
      <div class="search-result-box">
        <h2 class="result-type">{{ result.label }}</h2>
        <ul class="result-list">
          <li v-for="item in result.data" :key="item.slug" class="result-item">
            <component :is="getCardComponent(type)" :result="item" :type="type" />
          </li>
        </ul>
      </div>
      <router-link v-if="result.data.length < result.totalCount" :to="`/${type}${generateSearchRoute}`"
        class="see-all-link">
        <div class="more-results">See all {{ type }} results</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import PersonCard from '../components/PeopleCard.vue'
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
  performSearch(route.params.type, route.query.keywords)
})

watch(route, () => {
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
.search-results {
  margin-bottom: 1rem;
  background-color: var(--color-background);
  box-shadow: var(--elevation-lined);
  border-radius: var(--corner-radius-medium);
  overflow: hidden;
}

.search-result-box {
  padding: 1rem;
}

.result-type {
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--color-text);
}

.result-list {
  list-style: none;
  padding: 0;
}

.result-item {
  border-bottom: 1px solid var(--color-shadow);
  padding: 0.5rem 0;
}

.result-item:last-child {
  border-bottom: none;
}

.search-results .more-results {
  border-top: 1px solid var(--color-shadow);
  max-width: 100%;
  width: 100%;
  padding: 0.6rem;
  transition: 0.4s;
  text-align: center;
}

.search-results .more-results:hover {
  background-color: var(--color-background-hover);
}

.search-results a:hover {
  text-decoration: none;
}
</style>
