<script setup>
import { ref } from 'vue';

const props = defineProps({
    word: {
        type: String,
        default: ''
    },
    translation: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: 'closed'
    },
    status: {
        type: String,
        default: 'pending'
    },
})

const emit = defineEmits(['rotate', 'changeStatus']);

const handleRotate = () => {
    emit('rotate', props.state);
}
</script>

<template>
    <div class="card">
        <div class="content">
            <span class="index">02</span>
            <h3>{{ state == 'opened' ? translation : word }}</h3>
            <button class="rotate" @click="handleRotate">Перевернуть</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 250px;
    height: 376px;

    border-radius: 12px;

    background-color: var(--color-primary-inverted);

    padding: 28px 20px;

    &>.content {
        border-radius: 12px;

        width: 100%;
        height: 100%;

        border: 1px solid var(--color-light-blue);

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        &>.index {
            position: absolute;
            top: -8px;
            left: 16px;

            font-size: 14px;
            font-weight: 400;

            background-color: var(--color-primary-inverted);
        }

        &>.rotate {
            position: absolute;
            bottom: -9px;
            left: calc(50% - 49px);

            font-size: 12px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 12%;

            text-transform: uppercase;

            background-color: var(--color-primary-inverted);

            cursor: pointer;

            border: none;
        }

        &>h3 {
            font-size: 18px;
            font-weight: 400;
        }
    }
}
</style>