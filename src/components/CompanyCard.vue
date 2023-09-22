<template>
  <div class="card">
    <div class="icon">
      <CompanyIcon />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title">{{ result.name }}</div>
      </router-link>

      <div class="subtitle-primary">{{ result.catchPhrase }}</div>
      <div class="subtitle-secondary">{{ result.buzzPhrase }}</div>
    </div>
  </div>
</template>

<script setup>
import CompanyIcon from './icons/IconCompany.vue'

defineProps({
  result: Object,
  type: String
})
</script>
