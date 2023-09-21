<template>
  <div class="card">
    <router-link :to="`/${type}/${result.slug}`">
      <div class="title">{{ result.county }}</div>
    </router-link>
    <div>{{ result.city }}</div>
    <div>{{ result.street }}</div>
    <div>{{ result.zipCode }}</div>
    <div>{{ result.buildingNumber }}</div>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
  type: String
})
</script>
