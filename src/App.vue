<template>
  <div id="app">
    <header>
      <SearchBar @search="performSearch" />
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  components: { SearchBar },
  name: 'App',
};
</script>

<style>
header {
  margin-bottom: 20px;
}
</style>
