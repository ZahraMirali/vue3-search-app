<template>
  <div class="search-bar">
    <div class="search-box-with-category">
      <CustomSelect :options="categories" :value="selectedCategory" @input="onInput" />
      <span class="separator">|</span>
      <form @submit.prevent="submitSearchForm">
        <div class="search-box">
          <input class="search-input" v-model="searchTerm" type="text" placeholder="Search...">
          <button class="search-button">
            <IconSearch />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import CustomSelect from "./CustomSelect.vue";
import IconSearch from './icons/IconSearch.vue';
const router = useRouter();
const route = useRoute();

const categories = inject("categories");
const selectedCategory = ref(route.params.type || "all");
const searchTerm = ref(route.query.keywords || "");


function onInput(event) {
  selectedCategory.value = event;
  submitSearchForm();
}

function submitSearchForm() {
  const searchRoute = `/${selectedCategory.value}${searchTerm.value ? '/?keywords=' + searchTerm.value : ''}`
  router.push(searchRoute);
}
</script>

<style scoped>
.search-bar {
  display: flex;
  box-shadow: 0 0 0 1px hsla(0, 0%, 54.9%, 0.2), 0 4px 4px rgba(0, 0, 0, 0.3);
  //box-shadow: 0 -0.625rem 3.125rem 0 black;
  //-webkit-box-shadow: 0 -0.625rem 3.125rem 0 black;
  //-moz-box-shadow: 0 -0.625rem 3.125rem 0 black;
  padding: 1.25rem;
  width: 100%;
  background-color: white;
}

.search-box-with-category {
  display: flex;
  align-items: center;
  background-color: #EDF3F8;
  padding: 0;
  border-top: 0.0625rem solid #cccccc;
  border-bottom: 0.0625rem solid #cccccc;
  border-right: 0.0625rem solid #cccccc;
  border-left: 0.0625rem solid #cccccc;
  border-radius: 0.75rem 2.5rem 2.5rem 0.75rem;
  -webkit-border-radius: 0.75rem 2.5rem 2.5rem 0.75rem;
  -moz-border-radius: 0.75rem 2.5rem 2.5rem 0.75rem;
}

.search-box {
  display: flex;
  border: 0;
  border-radius: 0 2.5rem 2.5rem 0;
  -webkit-border-radius: 0 2.5rem 2.5rem 0;
  -moz-border-radius: 0 2.5rem 2.5rem 0;
  padding: 0;
  overflow: hidden;
}

.search-box input[type=text] {
  border: 0;
  outline: 0;
  font-size: 1rem;
  background-color: transparent;
  padding-left: 0.625rem;
  transition: 0.4s;
}

.search-box button {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2.5rem;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s;
}

.search-box button:hover {
  background-color: rgba(0, 0, 0, 0.10);
  cursor: pointer;
}

.separator {
  color: rgba(0, 0, 0, 0.20);
  font-size: 1.4rem;
}
</style>
