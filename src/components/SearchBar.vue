<template>
    <div class="search-bar">
        <input v-model="searchTerm" type="text" placeholder="Search..." />
        <CustomSelect :options="categories" :value="selectedCategory" @input="onInput" />
        <router-link :to="generateSearchRoute" tag="button">Search</router-link>
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
        },
        loadCategories() {
            getAllCategories()
                .then((results) => {
                    console.log("categories:", results)
                    this.categories = results;
                    this.loading = false;
                });
        },
    },
    computed: {
        generateSearchRoute() {
            console.log('generateSearchRoute SEARCHbAR', this.selectedCategory, 'searchTerm', this.searchTerm)
            return `/${this.selectedCategory}${this.searchTerm ? '/?keywords=' + this.searchTerm : ''}`;
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
  