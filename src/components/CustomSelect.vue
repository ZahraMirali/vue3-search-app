<template>
  <div :class="{ open }" class="custom-select" tabindex="0" @blur="open = false">
    <div class="selected" @click="toggleDropdown">
      {{ getSelectedOption().label }}
      <div class="arrow"></div>
    </div>
    <div v-show="open" class="items">
      <div data-test="option-all" @click="selectOption('all')">All</div>
      <div
        v-for="option of options"
        :key="option.value"
        :data-test="`option-${option.value}`"
        @click="selectOption(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
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

function getSelectedOption() {
  return props.options.find((item) => item.value === props.value) || { label: 'All', value: 'all' }
}

function toggleDropdown() {
  open.value = !open.value
}

function selectOption(selectedValue) {
  emit('input', selectedValue)
  open.value = false
}
</script>

<style scoped>
.custom-select {
  width: 7.5rem; /* Converted from 120px to rem */
  position: relative;
  text-align: left;
  outline: none;
  height: 2.5rem;
  line-height: 2.5rem;
}

.custom-select .selected {
  border-radius: 0.375rem;
  padding: 0 1rem; /* Converted from 0.625rem to rem */
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
  background-color: white;
  margin-top: 0;
  box-shadow: 1rem 1rem 6.25rem -2.5rem rgba(0, 0, 0, 0.6); /* Converted box-shadow values to rem */
  -webkit-box-shadow: 1rem 1rem 6.25rem -2.5rem rgba(0, 0, 0, 0.6); /* Converted box-shadow values to rem */
  -moz-box-shadow: 1rem 1rem 6.25rem -2.5rem rgba(0, 0, 0, 0.6); /* Converted box-shadow values to rem */
  transition: 0.4s;
}

.custom-select .items div {
  padding-left: 1rem; /* Converted from 0.625rem to rem */
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
  margin-top: 0.625rem; /* Converted from 10px to rem */
  margin-left: 0.3125rem; /* Converted from 5px to rem */
}
</style>