<template>
    <div class="card">
        <router-link :to="`/${result.type}/${result.slug}`">
            <div class="title">{{ result.product }}</div>
        </router-link>
        <div>{{ result.productDescription }}</div>
        <div>{{ result.productMaterial }}</div>
        <div>{{ result.price }}</div>
    </div>
</template>
  
<script>
export default {
    props: {
        result: Object,
    },
};
</script>

  