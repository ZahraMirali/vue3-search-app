<template>
  <div class="search-bar">
    <div class="search-box-with-category">
      <CustomSelect :options="categories" :value="selectedCategory" @input="onInput"/>
      <form @submit.prevent="submitSearchForm">
        <div class="search-box">
          <input class="search-input" v-model="searchTerm" type="text" placeholder="Search...">
          <button class="search-button">
            <IconSearch/>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from 'vue';
import {useRouter} from 'vue-router';
import CustomSelect from "./CustomSelect.vue";
import IconSearch from './icons/IconSearch.vue';

const categories = inject("categories");
const selectedCategory = ref("all");
const searchTerm = ref("");
const router = useRouter();

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
  box-shadow: 0 -10px 50px 0 black;
  -webkit-box-shadow: 0 -10px 50px 0 black;
  -moz-box-shadow: 0 -10px 50px 0 black;
  padding: 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.40);
}

.search-box-with-category {
  display: flex;
  background-color: white;
  padding: 0;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-radius: 12px 36px 36px 12px;
  -webkit-border-radius: 12px 36px 36px 12px;
  -moz-border-radius: 12px 36px 36px 12px;
}

.search-box {
  display: flex;
  border: 0;
  border-radius: 0 36px 36px 0;
  -webkit-border-radius: 0 36px 36px 0;
  -moz-border-radius: 0 36px 36px 0;
  background-color: white;
  padding: 0;
  overflow: hidden;
}

.search-box input[type=text] {
  border: 0;
  outline: 0;
  font-size: 16px;
  background-color: white;
  padding-left: 10px;
  transition: 0.4s ease-in-out;
}

.search-box button {
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border: 0;
  outline: 0;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;
}

.search-box button:hover {
  background-color: rgba(0, 0, 0, 0.10);
  //background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
}


</style>