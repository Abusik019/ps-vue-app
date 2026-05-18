<script setup>
import IconCloud from '../icons/weather/IconCloud.vue';
import IconSun from '../icons/weather/IconSun.vue';
import IconRain from '../icons/weather/IconRain.vue';

const { weatherCode, date, temp, isToday } = defineProps({
    weatherCode: Number,
    date: Date,
    temp: Number,
    isToday: Boolean
})

</script>

<template>
    <li class="card" :class="{ active: isToday }">
        <IconSun v-if="weatherCode === 1000"/>
        <IconRain v-if="weatherCode === 1003"/>
        <IconCloud v-if="weatherCode === 1009"/>
        <div class="week-day">{{ date.toLocaleDateString("ru-RU", { weekday: "short" }) }}</div>
        <div class="temperature">{{ temp }} °C</div>
    </li>
</template>

<style lang="scss" scoped>
.card{
    background-color: var(--color-bg-card);
    color: var(--color-primary);

    padding: 15px 24px 20px 24px;   

    box-shadow: 1px 2px 4px 0px #222831;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    transition: background-color .3s ease;

    &.active{
        background-color: var(--color-primary);
        color: var(--color-bg-card);
        pointer-events: none;
    }

    &>.week-day{
        font-size: 20px;
        font-weight: 400;
    }

    &>.temperature{
        font-size: 20px;
        font-weight: 700;
    }

    &:hover{
        background-color: var(--color-bg-card-hover);
    }
}
</style>