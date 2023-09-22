<template>
  <div class="card">
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title" data-test="product-name">{{ result.name }}</div>
      </router-link>
      <div class="subtitle-primary" data-test="product-description">{{ result.description }}</div>
      <div class="subtitle-secondary" data-test="product-material">{{ result.material }}</div>
      <div class="price" data-test="product-price">{{ result.price }} €</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
  type: String
})
</script>

<style scoped>
.details .price {
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 183, 151, 0.96);
  text-align: right;
}
</style>
