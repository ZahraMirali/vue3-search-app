<template>
    <div class="card">
        <div class="card-header">
            <!-- Display the icon based on sexType -->
            <div class="sex-icon">
                <component :is="result.sexType === 'male' ? 'MaleIcon' : 'FemaleIcon'" />
            </div>
            <div class="title-container">
                <router-link :to="`/${result.type}/${result.slug}`">
                    <div class="title">{{ result.firstName }} {{ result.lastName }}</div>
                </router-link>
                <div class="job-title">{{ result.jobTitle }}</div>
            </div>
        </div>
        <div class="bio">{{ result.bio }}</div>
    </div>
</template>
  
<script>
import MaleIcon from './icons/IconMale.vue';
import FemaleIcon from './icons/IconFemale.vue';

export default {
    props: {
        result: Object,
    },
    components: {
        MaleIcon,
        FemaleIcon,
    },
};
</script>
