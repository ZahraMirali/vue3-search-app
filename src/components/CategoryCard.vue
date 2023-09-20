<template>
  <div class="card">
        <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                 stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"/>
            </svg>
        </span>
    <h4>{{ name }}</h4>
    <p>
      Standard chunk of Lorem Ipsum used since the 1500s is showed below
      for those interested.
    </p>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps(['name']);

</script>

<style scoped>
.card {
  background-color: #FAFAFA;
  box-shadow: 0 3px 6px rgba(24, 24, 27, 0.02), 0 2px 7px rgba(24, 24, 27, 0.04), 0 0 0 1px rgba(24, 24, 27, 0.08);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow .25s;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: transparent;
}

.card .icon {
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
}

.card .icon::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background-color: rgba(24, 24, 27, 0.04);
  border: 1px solid rgba(24, 24, 27, 0.34);
  backdrop-filter: blur(2px);
  transition: background-color .25s, border-color .25s;
}

.card .icon svg {
  position: relative;
  z-index: 1;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateZ(0);
  color: #18181B;
  transition: color .25s;
}

.card h4 {
  z-index: 2;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: #18181B;
}

.card p {
  z-index: 2;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: #52525B;
}

.card:hover {
  box-shadow: 0 3px 6px rgba(24, 24, 27, 0.05), 0 8px 15px rgba(24, 24, 27, 0.1), 0 0 0 1px rgba(24, 24, 27, 0.15);
}

.card:hover .icon::after {
  background-color: rgba(52, 211, 153, 0.1);
  border-color: rgba(52, 211, 153, 0.2);
}

.card:hover .icon svg {
  color: #34D399;
}
</style>