<script setup>
defineProps({
    error: String
})
</script>

<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<style lang="scss" scoped>
.error{
    width: calc(100% - 100px);

    background-color: var(--color-bg-card);

    position: absolute;
    top: 0;

    box-shadow: 1px 2px 4px 0px #222831;
    border-radius: 0 0 25px 25px;

    padding: 15px 0;

    font-size: 18px;
    font-weight: 400;
    color: var(--color-primary);
    text-align: center;
}
</style>