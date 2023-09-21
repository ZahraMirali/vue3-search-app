<template>
  <div :class="{ open }" class="custom-select" tabindex="0" @blur="open = false">
    <div class="selected" @click="toggleDropdown">
      {{ capitalizeFirstLetter(value) }}
      <div class="arrow"></div>
    </div>
    <div v-show="open" class="items">
      <div @click="selectCategory('all')">All</div>
      <div v-for="option of options" :key="option" @click="selectCategory(option)">
        {{ capitalizeFirstLetter(option) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  options: {
    type: Array,
    required: true
  },
  value: {
    type: String,
    required: false,
    default: null
  }
})

const open = ref(false)
const emit = defineEmits(['input'])

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function toggleDropdown() {
  open.value = !open.value
}

function selectCategory(selectedCategory) {
  emit('input', selectedCategory)
  open.value = false
}
</script>

<style scoped>
.custom-select {
  width: 120px;
  position: relative;
  text-align: left;
  outline: none;
  height: 2.5rem;
  line-height: 2.5rem;
}

.custom-select .selected {
  border-radius: 0.375rem;
  padding: 0 0.625rem;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
}

.custom-select .items {
  border-radius: 0.375rem;
  overflow: hidden;
  border: 0.0625rem solid #ccc;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  margin-top: 0rem;
  box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}

.custom-select .items div {
  padding-left: 0.625rem;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.custom-select .items div:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #52525b;
}

.arrow {
  border: 0.375rem solid;
  border-color: black transparent transparent transparent;
  display: inline;
  align-self: center;
  margin-top: 10px;
  margin-left: 5px;
}
</style>