<template>
    <div class="search-bar">
        <CustomSelect :options="categories" :value="selectedCategory" @input="onInput" />
        <form @submit.prevent="submitSearchForm">
            <input v-model="searchTerm" type="text" placeholder="Search..">
            <button>+</button>
        </form>
    </div>
</template>
  
<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import CustomSelect from "./CustomSelect.vue";

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
    background-color: white;
    box-shadow: 0px -10px 20px 0px black;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
</style>