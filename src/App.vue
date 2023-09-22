<template>
  <LoadingSpinner v-if="loading" />
  <template v-else>
    <header>
      <SearchBar />
    </header>

    <main>
      <RouterView />
    </main>
  </template>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { getAllCategories } from './services/search'
import { RouterView } from 'vue-router'

const categories = ref([])
const loading = ref(true)

async function loadCategories() {
  categories.value = await getAllCategories()
  loading.value = false
}

onMounted(() => {
  loadCategories()
})

provide('categories', categories)
</script>
