<script setup>
import {  computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";
import Error from "./components/Error.vue";
import DayCard from "./components/DayCard.vue";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const data = ref();

const error = ref();
const errorMap = new Map([
	[1006, "Указанный город не найден"],
]);
const errorDisplay = computed(() => {
	return errorMap.get(error.value?.error?.code)
})

const dataModifed = computed(() => {
	return [
		{
			label: "Влажность",
			stat: data.value.current.humidity + "%"
		},
		{
			label: "Облачность",
			stat: data.value.current.cloud + "%"
		},
		{
			label: "Ветер",
			stat: data.value.current.wind_kph + " км/ч"
		},
	]
})

async function getCity(cityName) {
	const params = new URLSearchParams({
		q: cityName,
		lang: "ru",
		key: API_KEY,
		days: 3,
	});

 	const res = await fetch(`${BASE_URL}/forecast.json?${params.toString()}`);
	if(res.status !== 200){
		error.value = await res.json();
		data.value = null;
		return;
	}

	data.value = await res.json();
	error.value = null;
}

</script>

<template>
	<main class="main">
		<Error v-if="error" :error="errorDisplay" />
		<div v-if="data">
			<Stat v-for="(value, index) in dataModifed" v-bind="value" :key="index" />
			<ul class="days-list">
				<DayCard
					v-for="item in data.forecast.forecastday"
					:key="item.date" 
					:weather-code="item.day.condition.code"
					:temp="item.day.avgtemp_c"
					:date="new Date(item.date)"
					:is-today="false"
				/>
			</ul>
		</div>
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style lang="scss" scoped>
.main {
	position: relative;

	width: 420px;
	
	background: var(--color-bg-main);
	padding: 60px 50px;
	border-radius: 25px;

	&> div > .days-list{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;

		margin-top: 64px;
	}
}
</style>