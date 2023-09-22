<template>
  <div>
    <h1>Details - {{ type }} - {{ slug }}</h1>
  </div>
</template>

<script setup>
defineProps({ type: String, slug: String })
</script>