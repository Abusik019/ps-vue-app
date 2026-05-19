<script setup>
import IconCloud from '../icons/weather/IconCloud.vue';
import IconLocation from '../icons/IconLocation.vue';
import { computed, inject } from 'vue';
import IconSun from '../icons/weather/IconSun.vue';
import IconRain from '../icons/weather/IconRain.vue';
import { cityProvide } from '../constants';

const { date, weatherCode, temp, desc } = defineProps({
    date: [String, Date],
    weatherCode: Number,
    temp: Number,
    desc: String,
});

const city = inject(cityProvide);

const fullDate = date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
});

const weekday = computed(() => {
    const day = date.toLocaleDateString("ru-RU", {
        weekday: "long",
    });

    return day.charAt(0).toUpperCase() + day.slice(1);
});

</script>

<template>
    <div class="content">
        <div class="top-content_block">
            <div class="day">{{ weekday }}</div>
            <div class="date">{{ fullDate.replace(" г.", "") }}</div>
            <div class="location">
                <IconLocation />
                <span>{{ city }}</span>
            </div>
        </div>
        <div class="bottom-content_block">
            <IconSun v-if="weatherCode <= 1003" :size="95" />
            <IconCloud v-if="weatherCode >= 1006 && weatherCode < 1063" :size="95" />
            <IconRain v-if="weatherCode >= 1063" :size="95" />
            <div class="temp">{{ temp }} °C</div>
            <div class="desc">{{ desc }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    position: relative;

    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    z-index: 1;

    &>.top-content_block {

        &>.day {
            font-size: 37px;
            font-weight: 700;
        }

        &>.date {
            font-size: 22px;
            font-weight: 500;

            margin-top: 8px;
        }

        &>.location {
            display: flex;
            align-items: center;
            gap: 8px;

            margin-top: 10px;

            &>span {
                font-size: 20px;
                font-weight: 600;
            }
        }
    }

    &>.bottom-content_block {

        &>svg{
            margin-left: 10px;
            margin-bottom: 10px;
        }

        &>.temp {
            font-size: 50px;
            font-weight: 700;

            margin-top: 10px;
        }

        &>.desc {
            font-size: 30px;
            font-weight: 700;

            margin-top: 10px;
        }
    }
}
</style>