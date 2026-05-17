<script setup>
import {  computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";

const city = ref("");
const data = ref({
	humidity: 90,
	rain: 0,
	wind: 3,
});

const dataModifed = computed(() => {
	return [
		{
			label: "Влажность",
			stat: data.value.humidity + "%"
		},
		{
			label: "Осадки",
			stat: data.value.rain + "%"
		},
		{
			label: "Ветер",
			stat: data.value.wind + "м/ч"
		},
	]
})

function getCity(cityName) {
	city.value = cityName;
}

</script>

<template>
	<main class="main">
		<span>{{ city }}</span>
		<Stat v-for="(value, index) in dataModifed" v-bind="value" :key="index" />
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style scoped>
.main {
	width: 420px;
	
	background: var(--color-bg-main);
	padding: 60px 50px;
	border-radius: 25px;
}
</style>