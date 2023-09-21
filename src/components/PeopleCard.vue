<template>
  <div class="card">
    <div class="icon">
      <component :is="result.sexType === 'male' ? MaleIcon : FemaleIcon" />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <span class="title">{{ result.firstName }} {{ result.lastName }}</span>
      </router-link>
      <div class="subtitle">{{ result.jobTitle }}</div>
      <div class="bio">{{ result.bio }}</div>
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

<style>
.card {
  display: flex;
}

.card .icon {
  display: flex;
  flex-direction: row;
}

.card .details {
  margin-left: 6px;
}

.card .details .title {
  font-size: 1rem;
  font-weight: bold;
}

.card .details .subtitle {
  font-size: 0.8rem;
  color: var(--color-text);
}
.card .details .bio {
  font-size: 0.8rem;
  color: var(--color-text-gray);
}
</style>
