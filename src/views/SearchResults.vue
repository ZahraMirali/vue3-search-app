<template>
  <LoadingSpinner v-if="loading" />
  <ErrorAlert v-else-if="error" :message="error" />
  <div v-else>
    <div v-for="(result, type) in searchResults" :key="type" class="search-results">
      <div class="search-result-box">
        <h2 class="result-type">{{ result.label }}</h2>
        <ul class="result-list" v-if="result.data.length">
          <li v-for="item in result.data" :key="item.slug" class="result-item">
            <component :is="getCardComponent(type)" :result="item" :type="type" />
          </li>
        </ul>
        <div v-else>
          <p>No results found for this category.</p>
        </div>
      </div>
      <router-link v-if="result.data.length < result.totalCount" :to="`/${type}${generateSearchRoute}`">
        <div class="see-all-link">See all {{ type }} results</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import PeopleCard from '../components/PeopleCard.vue'
import CompanyCard from '../components/CompanyCard.vue'
import ProductCard from '../components/ProductCard.vue'
import LocationCard from '../components/LocationCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import ErrorAlert from '../components/ErrorAlert.vue'
import { searchCategory } from '../services/search'
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
      return PeopleCard
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
  margin: 0 auto 0.5rem auto;
  background-color: var(--color-background);
  box-shadow: var(--elevation-lined);
  -webkit-box-shadow: var(--elevation-lined);
  -moz-box-shadow: var(--elevation-lined);
  border-radius: var(--corner-radius-medium);
  overflow: hidden;
}

.search-result-box {
  padding: 1rem;
}

.result-type {
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--color-text);
}

.result-list {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}

.result-item {
  border-bottom: 0.0625rem solid var(--color-shadow);
  padding: 0.3125rem 0;
}

.result-item:last-child {
  border-bottom: none;
}

.search-results .see-all-link {
  border-top: 0.0625rem solid var(--color-shadow);
  max-width: 100%;
  width: 100%;
  padding: 0.375rem;
  transition: 0.4s;
  text-align: center;
}

.search-results .see-all-link:hover {
  background-color: var(--color-background-hover);
}

.search-results a:hover {
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .search-results {
    width: 726px;
    margin: 0 auto 0.5rem auto;
  }
}

@media screen and (max-width: 767px) {
  .search-results {
    width: 100%;
  }
}
</style>
