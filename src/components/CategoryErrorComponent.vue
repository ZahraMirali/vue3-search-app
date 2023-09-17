<template>
    <div>
        <NotExistIcon />
        <p>The category you have entered doesn't exist.</p>
    </div>
</template>
  
<script>
import NotExistIcon from './icons/IconNotExist.vue';

export default {
    components: { NotExistIcon },
    name: 'CategoryErrorComponent',
};
</script>
  