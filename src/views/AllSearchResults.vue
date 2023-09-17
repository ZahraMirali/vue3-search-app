<template>
    <LoadingSpinner v-if="loading" />
    <ErrorAlert v-else-if="error" :message="error" />
    <div v-else class="search-results">
        <div v-for="(result, type) in searchResults" :key="type" class="search-result-box">
            <h2 class="result-type">{{ type }}</h2>
            <ul class="result-list">
                <li v-for="item in result.slice(0, 3)" :key="item.id" class="result-item">
                    <component :is="getCardComponent(type)" :result="item" />
                </li>
            </ul>
            <router-link v-if="result.length > 3" :to="`/${type}${generateSearchRoute}`" class="see-all-link">
                See all {{ type }} results
            </router-link>
        </div>
    </div>
</template>
  
<script>
import SearchResults from "../components/SearchResults.vue";
import PersonCard from "../components/PersonCard.vue";
import CompanyCard from "../components/CompanyCard.vue";
import ProductCard from "../components/ProductCard.vue";
import LocationCard from "../components/LocationCard.vue";
import LoadingSpinner from '../components/LoadingSpinner.vue';
import ErrorAlert from '../components/ErrorAlert.vue';
import searchCategory from "../services/search";

export default {
    props: { searchTerm: String },
    components: {
        SearchResults,
        PersonCard,
        CompanyCard,
        ProductCard,
        LocationCard,
        LoadingSpinner,
        ErrorAlert
    },
    data() {
        return {
            loading: true,
            error: null,
            searchResults: {},
        };
    },
    computed: {
        generateSearchRoute() {
            return `${this.searchTerm ? '/' + this.searchTerm : ''}`;
        },
    },
    created() {
        console.log("ALL CREATED")
        this.performSearch('all', this.$route.params.searchTerm);
    },
    watch: {
        $route(to) {
            const routeParams = to.params;
            console.log("ALL WATCH")
            this.performSearch('all', routeParams.searchTerm);
        },
    },
    methods: {
        getCardComponent(type) {
            switch (type) {
                case "people":
                    return "PersonCard";
                case "companies":
                    return "CompanyCard";
                case "products":
                    return "ProductCard";
                case "locations":
                    return "LocationCard";
                default:
                    return "div";
            }
        },
        performSearch(selectedCategory, searchTerm = '') {
            searchCategory(selectedCategory, searchTerm)
                .then((results) => {
                    console.log("results", results)
                    this.searchResults = results;
                })
                .catch((error) => {
                    this.error = error;
                })
                .finally(() => {
                    this.loading = false;
                })
        },
    }
};
</script>
  

<style scoped>
.search-result-box {
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    background-color: #fff;
    padding: 1.6rem 1.2rem 0.4rem 1.6rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.result-type {
    font-weight: 600;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.9);
}

.result-list {
    list-style: none;
    padding: 0;
}

.result-item {
    border-bottom: 1px solid #d1d1d1;
    padding: 1rem 0;
}

.result-item:last-child {
    border-bottom: none;
}
</style>
  