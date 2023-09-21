<template>
  <div>
    <h1>Details - {{ this.type }} - {{ this.slug }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({ type: String, slug: String })
</script>

<style scoped></style>
