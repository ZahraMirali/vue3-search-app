<template>
  <div class="error-message">
    <NotExistIcon />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import NotExistIcon from './icons/IconNotExist.vue'

defineProps({ message: String })
</script>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message p {
  color: var(--color-secondary-text);
}
</style>
