<template>
    <h1>Welcome to the Search App</h1>
    <p>Please use the search bar to find results.</p>
    <div class="grid">
        <CategoryCard />
    </div>
</template>
  
<script>
import CategoryCard from '../components/CategoryCard.vue';

export default {
    name: 'Home',
    components: { CategoryCard }
};
</script>
  
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-gap: 32px;
    position: relative;
    z-index: 1;
}
</style>
  