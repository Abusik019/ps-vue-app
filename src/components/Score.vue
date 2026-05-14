<script setup>
import HeartIcon from '../assets/icons/HeartIcon.vue';
</script>

<template>
    <div class="score">
        <span>100</span>
        <HeartIcon />
    </div>
</template>

<style lang="scss" scoped>
    .score{
        padding: 12px 24px;

        background-color: var(--color-light-blue);
        color: var(--color-blue);

        display: flex;
        align-items: center;
        gap: 10px;

        border-radius: 36px;

        &>span{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
        }
    }
</style>