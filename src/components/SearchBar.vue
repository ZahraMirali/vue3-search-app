<template>
    <div class="search-bar">
        <CustomSelect :options="categories" :value="selectedCategory" @input="onInput" />
        <form @submit.prevent="submitSearchForm">
            <input v-model="searchTerm" type="text" placeholder="Search..">
            <button>+</button>
        </form>
    </div>
</template>
  
<script>
import CustomSelect from "./CustomSelect.vue";
import { getAllCategories } from "../services/search";

export default {
    components: {
        CustomSelect,
    },
    data() {
        return {
            searchTerm: "",
            selectedCategory: "all",
            categories: [],
            loading: true
        };
    },
    created() {
        this.loadCategories()
    },
    methods: {
        onInput(event) {
            this.selectedCategory = event;
            this.submitSearchForm();
        },
        loadCategories() {
            getAllCategories()
                .then((results) => {
                    console.log("categories:", results)
                    this.categories = results;
                    this.loading = false;
                });
        },
        submitSearchForm() {
            const searchRoute = `/${this.selectedCategory}${this.searchTerm ? '/?keywords=' + this.searchTerm : ''}`
            this.$router.push(searchRoute);
        },
    },
    watch: {
        $route(to) {
            console.log("==>to<==", to)
            const routeParams = to.params;
            this.selectedCategory = routeParams.type || 'all';
            this.searchTerm = to.query.keywords || '';
        },
    },
};
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
  