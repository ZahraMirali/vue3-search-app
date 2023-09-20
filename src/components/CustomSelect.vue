<template>
  <div class="custom-select" tabindex="0" :class="{ open }" @blur="open = false">
    <div class="selected" @click="toggleDropdown">{{ capitalizeFirstLetter(value) }}</div>
    <div class="items" v-show="open">
      <div @click="selectCategory('all')">All</div>
      <div v-for="option of options" :key="option" @click="selectCategory(option)">
        {{ capitalizeFirstLetter(option) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    toggleDropdown() {
      this.open = !this.open;
    },
    selectCategory(selectedCategory) {
      this.$emit('input', selectedCategory);
      this.open = false;
    },
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 9.375rem;
  text-align: left;
  outline: none;
  height: 2.5rem;
  line-height: 2.5rem;
}

.custom-select .selected {
  border-radius: 0.375rem;
  padding-left: 0.625rem;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 1.125rem;
  right: 1rem;
  width: 0;
  height: 0;
  border: 0.375rem solid;
  border-color: black transparent transparent transparent;
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
  margin-top: 0.0rem;
  box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0.625rem 0.625rem 3.75rem -1rem rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}

.custom-select .items div {
  padding-left: 0.625rem;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #52525B;
}
</style>