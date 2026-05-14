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

    background: var(--color-blue);
    color: var(--color-primary-inverted);

    font-size: 24px;
    line-height: 36px;
    font-weight: 400;

    cursor: pointer;

    min-width: 315px;

    padding: 16px 10px;
}
</style>