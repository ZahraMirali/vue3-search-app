<template>
  <div>
    <NotExistIcon />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import NotExistIcon from './icons/IconNotExist.vue'
import { defineProps } from 'vue'

defineProps({ message: String })
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>