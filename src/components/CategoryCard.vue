<template>
  <div class="category-card">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <h4>{{ name }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'description'])
</script>

<style scoped>
.category-card {
  background-color: #fafafa;
  box-shadow:
    0 3px 6px rgba(24, 24, 27, 0.02),
    0 2px 7px rgba(24, 24, 27, 0.04),
    0 0 0 1px rgba(24, 24, 27, 0.08);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}

.category-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: transparent;
}

.category-card .icon {
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
}

.category-card .icon::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background-color: rgba(24, 24, 27, 0.04);
  border: 1px solid rgba(24, 24, 27, 0.34);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  transition:
    background-color 0.25s,
    border-color 0.25s;
}

.category-card .icon :slotted(svg) {
  position: relative;
  z-index: 1;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateZ(0);
  color: #18181b;
  transition: color 0.25s;
}

.category-card h4 {
  z-index: 2;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: #18181b;
}

.category-card p {
  z-index: 2;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: #52525b;
}

.category-card:hover {
  box-shadow:
    0 3px 6px rgba(24, 24, 27, 0.05),
    0 8px 15px rgba(24, 24, 27, 0.1),
    0 0 0 1px rgba(24, 24, 27, 0.15);
}

.category-card:hover .icon::after {
  background-color: rgba(52, 211, 153, 0.1);
  border-color: rgba(52, 211, 153, 0.2);
}

.category-card:hover .icon :slotted(svg) {
  color: #34d399;
}
</style>
