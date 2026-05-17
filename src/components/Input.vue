<script setup>
const model = defineModel({ type: String, required: true });
</script>

<template>
    <input v-model="model" class="city-input" />
</template>

<style lang="scss" scoped>
.city-input{
    width: 60%;
    
    background-color: var(--color-bg-card);
    color: var(--color-primary);

    font-family: var(--font);
    font-size: 18px;
    font-weight: 400;

    padding: 15px 14px;

    border-radius: 10px;
    border: none;
    outline: none;

    box-shadow: 1px 2px 4px 0px #222831;
}
</style>