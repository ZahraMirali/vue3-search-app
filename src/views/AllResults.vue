<template>
    <div>
        <SearchResults :results="searchResults" :searchTerm="searchTerm" />
    </div>
</template>
  
<script>
import SearchResults from "../components/SearchResults.vue";
import peopleData from "../data/people.json";
import companiesData from "../data/companies.json";
import productsData from "../data/products.json";
import locationsData from "../data/locations.json";

export default {
    components: {
        SearchResults,
    },
    data() {
        return {
            searchResults: {},
            searchTerm: "",
        };
    },
    methods: {
        performSearch(searchTerm, selectedCategory) {
            const results = {};
            this.searchTerm = searchTerm;

            if (selectedCategory === "all") {
                results.people = [...this.filterAndMapResults(peopleData, searchTerm, "people")];
                results.companies = [...this.filterAndMapResults(companiesData, searchTerm, "companies")];
                results.products = [...this.filterAndMapResults(productsData, searchTerm, "products")];
                results.locations = [...this.filterAndMapResults(locationsData, searchTerm, "locations")];
            } else {
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

                results[selectedCategory] = [...this.filterAndMapResults(selectedData, searchTerm, selectedCategory)];
            }

            console.log("results", results)
            this.searchResults = results;
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
  