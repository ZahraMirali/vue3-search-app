<template>
  <div class="card">
    <router-link :to="`/${type}/${result.slug}`">
      <div class="title">{{ result.name }}</div>
    </router-link>
    <div>{{ result.catchPhrase }}</div>
    <div>{{ result.buzzPhrase }}</div>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
  type: String
})
</script>
