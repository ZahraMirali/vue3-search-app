<template>
    <div>
        <NotExistIcon />
        <p>{{ message }}</p>
    </div>
</template>
  
<script>
import NotExistIcon from './icons/IconNotExist.vue';

export default {
    components: { NotExistIcon },
    props: { message: String }
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
  