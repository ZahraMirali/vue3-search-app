<template>
    <div class="card">
        <router-link :to="`/${result.type}/${result.id}`">
            <div class="title">{{ result.name }}</div>
        </router-link>
        <div>{{ result.catchPhrase }}</div>
        <div>{{ result.buzzPhrase }}</div>
    </div>
</template>
  
<script>
export default {
    props: {
        result: Object,
    },
};
</script>
  