<template>
  <div id="app">
    <header>
      <SearchBar @search="performSearch"/>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import {provide, ref} from 'vue';
import SearchBar from "./components/SearchBar.vue";
import {getAllCategories} from "./services/search";

const categories = ref([]);
const loading = ref(true);

async function loadCategories() {
  const results = await getAllCategories();

  categories.value = results;
  loading.value = false;
}

loadCategories();

provide('categories', categories)
</script>

<style>
header {
  margin-bottom: 20px;
}
</style>