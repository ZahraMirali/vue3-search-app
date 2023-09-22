<template>
  <div class="card">
    <div class="icon">
      <LocationIcon />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title" data-test="location-county">{{ result.county }}</div>
      </router-link>
      <div class="subtitle-primary" data-test="location-address">
        {{ `${result.city}, ${result.street} ${result.buildingNumber}` }}
      </div>
      <div class="subtitle-secondary" data-test="location-zip-code">Zip Code: {{ result.zipCode }}</div>
    </div>
  </div>
</template>


<script setup>
import LocationIcon from './icons/IconLocation.vue'

defineProps({
  result: Object,
  type: String
})
</script>
