<template>
  <div class="card">
    <div class="icon">
      <component :is="result.sexType === 'male' ? MaleIcon : FemaleIcon" />
    </div>
    <div class="details">
      <router-link :to="`/${type}/${result.slug}`">
        <div class="title">{{ result.firstName }} {{ result.lastName }}</div>
        <div class="subtitle-primary">{{ result.jobTitle }}</div>
        <div class="subtitle-secondary">{{ result.bio }}</div>
      </router-link>
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

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: var(--corner-radius-medium);
  transition: 0.4s;
}

.card .details {
  width: 100%;
  margin-left: 6px;
}

.card .details a:hover {
  text-decoration: none;
}

.card .details .title {
  font-size: 1rem;
  font-weight: bold;
}

.card .details:hover .title {
  text-decoration: underline;
}

.card .details .subtitle-primary {
  font-size: 0.8rem;
  color: var(--color-text);
  text-decoration: none;
}

.card .details .subtitle-secondary {
  font-size: 0.8rem;
  color: var(--color-text-gray);
}
</style>
