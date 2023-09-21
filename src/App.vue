<template>
  <LoadingSpinner v-if="loading" />
  <template v-else>
    <header>
      <SearchBar @search="performSearch" />
    </header>

    <main>
      <RouterView />
    </main>
  </template>
</template>

<script setup>
import { provide, ref } from 'vue';
import SearchBar from "./components/SearchBar.vue";
import LoadingSpinner from './components/LoadingSpinner.vue';
import { getAllCategories } from "./services/search";
import { RouterView } from 'vue-router'

const categories = ref([]);
const loading = ref(true);

async function loadCategories() {
  try {
    const results = await getAllCategories();
    categories.value = results;
    loading.value = false;
  } catch (error) {
    console.error('Failed to load categories:', error);
  }
}

loadCategories();

provide('categories', categories)
</script>

<style>
header {
  margin-bottom: 20px;
}
</style>