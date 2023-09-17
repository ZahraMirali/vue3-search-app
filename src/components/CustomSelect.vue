<template>
    <div class="custom-select" tabindex="0" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ value }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="option of options" :key="option" @click="
                value = option;
            open = false;
            $emit('input', option);
            ">
                {{ option }}
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

.custom-select .selected.open {
    border: 1px solid #ccc;
    border-radius: 6px 6px 0px 0px;
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
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
}

.custom-select .items div {
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    font-weight: bold;
}

.selectHide {
    display: none;
}
</style>
  