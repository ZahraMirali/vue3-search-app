<template>
  <div class="card">
    <div class="icon">
      <component :is="result.sexType === 'male' ? MaleIcon : FemaleIcon" />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title">{{ result.firstName }} {{ result.lastName }}</div>
      </router-link>
      <div class="subtitle-primary">{{ result.jobTitle }}</div>
      <div class="subtitle-secondary">{{ result.bio }}</div>
    </div>
  </div>
</template>

<script setup>
import MaleIcon from './icons/IconMale.vue'
import FemaleIcon from './icons/IconFemale.vue'

defineProps({
  result: Object,
  type: String
})
</script>
