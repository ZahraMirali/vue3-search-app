<template>
  <div class="card">
    <div class="icon">
      <component :is=ProductIcon />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title">{{ result.name }}</div>
        <div class="subtitle-primary">{{ result.description }}</div>
        <div class="subtitle-secondary">{{ result.material }}</div>
        <div class="price">{{ result.price }} €</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ProductIcon from '@/components/icons/IconProduct.vue'

defineProps({
  result: Object,
  type: String
})
</script>

<style>
.details .price {
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 183, 151, 0.96);
  text-align: right;
}
</style>
