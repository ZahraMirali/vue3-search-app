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
    width: 150px;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
}

.custom-select .selected {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    background-color: white;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: black transparent transparent transparent;
}

.custom-select .items {
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
    margin-top: 2px;
}

.custom-select .items div {
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    font-weight: bold;
}
</style>
  