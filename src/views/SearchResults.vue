<template>
    <SearchResults v-if="categoryExists" :results="searchResults" />
    <CategoryErrorComponent v-else />
</template>
  
<script>
import SearchResults from "../components/SearchResults.vue";
import peopleData from "../data/people.json";
import companiesData from "../data/companies.json";
import productsData from "../data/products.json";
import locationsData from "../data/locations.json";
import CategoryErrorComponent from '../components/CategoryErrorComponent.vue';

export default {
    components: {
        SearchResults,
        CategoryErrorComponent
    },
    data() {
        return {
            searchResults: {},
            categoryExists: false,
            categories: ["people", "companies", "products", "locations"]
        };
    },
    created() {
        console.log("CREATED")
        this.selectedCategory = this.$route.params.type;
        const categoryExists = this.categories.includes(this.selectedCategory);
        this.categoryExists = categoryExists;
        if (this.categoryExists) {
            this.performSearch(this.selectedCategory, this.$route.params.searchTerm)
        }
    },
    watch: {
        $route(to) {
            console.log("WATCH")
            const routeParams = to.params;
            this.selectedCategory = routeParams.type;
            const categoryExists = this.categories.includes(this.selectedCategory);
            this.categoryExists = categoryExists;
            if (this.categoryExists) {
                this.performSearch(this.selectedCategory, routeParams.searchTerm)
            }
        },
    },
    methods: {
        performSearch(selectedCategory, searchTerm = '') {
            console.log("CATEGORY performSearch", selectedCategory);
            let selectedData;

            switch (selectedCategory) {
                case "people":
                    selectedData = peopleData;
                    break;
                case "companies":
                    selectedData = companiesData;
                    break;
                case "products":
                    selectedData = productsData;
                    break;
                case "locations":
                    selectedData = locationsData;
                    break;
                default:
                    selectedData = [];
            }

            this.searchResults = [...this.filterAndMapResults(selectedData, searchTerm, selectedCategory)];
            console.log("CATEGORY results", this.searchResults)

        },
        filterAndMapResults(data, searchTerm, type) {
            return data
                .filter((item) => this.itemMatchesSearch(item, searchTerm, type))
                .map((item) => ({ ...item, type }));
        },
        itemMatchesSearch(item, searchTerm, type) {
            if (type === "people") {
                return (
                    item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.bio.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (type === "companies") {
                return (
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.catchPhrase.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.buzzPhrase.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (type === "products") {
                return (
                    item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.productDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.productMaterial.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (type === "locations") {
                return (
                    item.county.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.buildingNumber.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            return false;
        },
    },
};
</script>
  