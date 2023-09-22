<template>
  <div class="search-bar">
    <div class="search-box-with-category">
      <CustomSelect :options="categories" :value="selectedCategory" @input="onInput" />
      <span class="separator">|</span>
      <form @submit.prevent="submitSearchForm">
        <div class="search-box">
          <input v-model="searchTerm" class="search-input" placeholder="Search..." type="text" data-test="search-input" />
          <button aria-label="Search" class="search-button" title="Search" type="submit">
            <IconSearch />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomSelect from './CustomSelect.vue'
import IconSearch from './icons/IconSearch.vue'

const router = useRouter()
const route = useRoute()

const categories = inject('categories')
const selectedCategory = ref(route.params.type || 'all')
const searchTerm = ref(route.query.keywords || '')

watch(
  () => route.params.type,
  () => {
    selectedCategory.value = route.params.type || 'all'
  }
)

function onInput(event) {
  selectedCategory.value = event
  submitSearchForm()
}

function submitSearchForm() {
  const searchRoute = `/${selectedCategory.value}${searchTerm.value ? '?keywords=' + searchTerm.value : ''
    }`
  router.push(searchRoute)
}
</script>

<style scoped>
.search-bar {
  display: flex;
  box-shadow:
    0 0 0 1px hsla(0, 0%, 54.9%, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.3);
  padding: 1.25rem;
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 3;
}

.search-box-with-category {
  width: 100%;
  margin: 0 auto 0 0;
  display: flex;
  align-items: center;
  background-color: #edf3f8;
  padding: 0;
  border: var(--border-width-small) solid #cccccc;
  border-radius: 0.8rem 2.4rem 2.4rem 0.8rem;
  -webkit-border-radius: 0.8rem 2.4rem 2.4rem 0.8rem;
  -moz-border-radius: 0.8rem 2.4rem 2.4rem 0.8rem;
  transition: 0.4s;
}

.search-box-with-category form {
  width: 100%;
}

.search-box {
  display: flex;
  flex-direction: row;
  padding: 0;
  border: 0;
  border-radius: 0 2.5rem 2.5rem 0;
  -webkit-border-radius: 0 2.5rem 2.5rem 0;
  -moz-border-radius: 0 2.5rem 2.5rem 0;
  overflow: hidden;
}

.search-box input[type='text'] {
  flex: 1;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1rem;
  background-color: transparent;
  padding-left: 0.625rem;
  transition: 0.4s width;
}

.search-box input[type='text']:focus {
  border: 0;
  outline: 0;
  font-size: 1rem;
  background-color: transparent;
  padding-left: 0.625rem;
}

.search-box button {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: var(--corner-radius-full);
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s;
}

.search-box button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.separator {
  color: rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
}
</style>