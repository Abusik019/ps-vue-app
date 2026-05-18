<script setup>
import FailIcon from '../assets/icons/FailIcon.vue';
import SuccessIcon from '../assets/icons/SuccessIcon.vue';

const props = defineProps({
    id: String,
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

const toggleStatus = (status) => {
    emit('changeStatus', status);
}
</script>

<template>
    <li class="card">
        <div v-if="state == 'closed'" class="content">
            <span class="index">{{ id }}</span>
            <h3>{{ word }}</h3>
            <button class="rotate" @click="handleRotate">Перевернуть</button>
        </div>
        <div v-else-if="state == 'opened' && status == 'pending'" class="content">
            <span class="index">{{ id }}</span>
            <h3>{{ translation }}</h3>
            <div class="card-buttons">
                <button class="rotate" @click="toggleStatus('failed')">
                    <FailIcon />
                </button>
                <button class="rotate" @click="toggleStatus('success')">
                    <SuccessIcon />
                </button>
            </div>
        </div>
        <div v-else-if="state == 'opened' && status == 'success'" class="content">
            <span class="index">{{ id }}</span>
            <div class="result"><SuccessIcon width="36" height="36" /></div>
            <h3>{{ word }}</h3>
            <button class="rotate" @click="handleRotate">Завершено</button>
        </div>
        <div v-else class="content">
            <span class="index">{{ id }}</span>
            <div class="result"><FailIcon width="36" height="36" /></div>
            <h3>{{ word }}</h3>
            <button class="rotate" @click="handleRotate">Завершено</button>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.card {
    width: 250px;
    height: 376px;

    border-radius: 12px;

    background-color: var(--color-primary-inverted);

    padding: 28px 20px;

    list-style-type: none;

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

        &>.card-buttons{
            display: flex;
            align-items: center;
            gap: 32px;

            position: absolute;
            bottom: -9px;
            left: calc(50% - 40px);

            background-color: var(--color-primary-inverted);

            &>button{
                background: none;
                border: none;

                width: 24px;
                height: 24px;

                cursor: pointer;
            }
        }

        &>.result{
            position: absolute;
            top: -13px;
            left: calc(50% - 18px);
        }
    }
}
</style>