<template>
    <ul class="result-list">
        <li v-for="item in results" :key="item.id" class="result-item">
            <component :is="getCardComponent()" :result="item" />
        </li>
    </ul>
</template>
  
<script>
import PersonCard from "@/components/PersonCard.vue";
import CompanyCard from "@/components/CompanyCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import LocationCard from "@/components/LocationCard.vue";

export default {
    props: {
        results: Object,
        type: String
    },
    components: {
        PersonCard,
        CompanyCard,
        ProductCard,
        LocationCard,
    },
    methods: {
        getCardComponent() {
            switch (this.type) {
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
    },
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
  