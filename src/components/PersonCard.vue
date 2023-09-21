<template>
  <div class="card">
    <div class="card-header">
      <div class="sex-icon">
        <component :is="result.sexType === 'male' ? MaleIcon : FemaleIcon" />
      </div>
      <div class="title-container">
        <router-link :to="`/${type}/${result.slug}`">
          <div class="title">{{ result.firstName }} {{ result.lastName }}</div>
        </router-link>
        <div class="job-title">{{ result.jobTitle }}</div>
      </div>
    </div>
    <div class="bio">{{ result.bio }}</div>
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
