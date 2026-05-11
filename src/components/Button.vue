<script setup>

</script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button{
    border: none;
    border-radius: 100px;

    background: var(--color-sky);
    color: var(--color-primary);

    font-family: var(--font-secondary);
    font-size: 24px;
    font-weight: 400;

    cursor: pointer;

    min-width: 315px;

    padding: 16px 10px;
}
</style>