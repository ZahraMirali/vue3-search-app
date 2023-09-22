<template>
  <div class="category-card">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <h4 data-test="category-name">{{ name }}</h4>
    <p data-test="category-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'description'])
</script>

<style scoped>
.category-card {
  background-color: var(--color-background);
  box-shadow: var(--elevation-raised);
  -webkit-box-shadow: var(--elevation-raised);
  -moz-box-shadow: var(--elevation-raised);
  padding: 1rem;
  border-radius: 0.9375rem;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}

.category-card .icon {
  position: relative;
  display: table;
  padding: 0.5rem;
}

.category-card .icon::after {
  content: '';
  position: absolute;
  inset: 0.3125rem;
  border-radius: 50%;
  background-color: rgba(24, 24, 27, 0.04);
  border: 0.0625rem solid rgba(24, 24, 27, 0.34);
  backdrop-filter: blur(0.125rem);
  -webkit-backdrop-filter: blur(0.125rem);
  transition:
    background-color 0.25s,
    border-color 0.25s;
}

.category-card .icon :slotted(svg) {
  position: relative;
  z-index: 1;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  transform: translateZ(0);
  transition: color 0.25s;
}

.category-card h4 {
  position: relative;
  margin: 0.75rem 0 0.25rem 0;
  font-family: inherit;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.25;
}

.category-card p {
  position: relative;
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-secondary-text);
}

.category-card:hover {
  box-shadow: var(--box-shadow-hover);
  -webkit-box-shadow: var(--box-shadow-hover);
  -moz-box-shadow: var(--box-shadow-hover);
}

.category-card:hover .icon::after {
  background-color: var(--color-pramary);
  border-color: var(--color-pramary-light);
}

.category-card:hover .icon :slotted(svg) {
  color: var(--color-pramary-dark);
}

.grid a:hover{
  text-decoration: none !important;
}
</style>
