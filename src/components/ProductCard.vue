<template>
  <div class="card">
    <router-link :to="`/${type}/${result.slug}`">
      <div class="title">{{ result.name }}</div>
    </router-link>
    <div>{{ result.description }}</div>
    <div>{{ result.material }}</div>
    <div>{{ result.price }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  result: Object,
  type: String
});
</script>
  