<script setup>
import { onMounted, provide, ref, watch } from "vue";
import PaneRight from "./components/PaneRight.vue";
import { cityProvide } from "./constants.js";
import PaneLeft from "./components/PaneLeft.vue";

const API_ENDPOINT = "https://api.weatherapi.com/v1";

let data = ref();
let error = ref();
let activeIndex = ref(0);
let city = ref("Москва");

provide(cityProvide, city);

watch(city, () => {
	getCity(city.value);
})

onMounted(() => {
	getCity(city.value);
})

async function getCity(city) {
	const params = new URLSearchParams({
		q: city,
		lang: "ru",
		key: "6b04fbeb8b6a48d2ba6143411252602",
		days: 3,
	});
	const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
	if (res.status != 200) {
		error.value = await res.json();
		data.value = null;
		return;
	}
	error.value = null;
	data.value = await res.json();
}
</script>

<template>
	<main class="main">
		<div class="left">
			<PaneLeft 
				v-if="data"
				:date="new Date(data?.forecast?.forecastday[activeIndex]?.date)"
				:weather-code="data?.forecast?.forecastday[activeIndex]?.day?.condition.code"	
				:temp="data?.forecast?.forecastday[activeIndex]?.day?.avgtemp_c"
				:desc="data?.forecast?.forecastday[activeIndex]?.day?.condition.text"	
			/>
			<div class="gradient-bg" />
		</div>
		<div class="right">
			<PaneRight
				:data 
				:error 
				:active-index="activeIndex" 
				@select-index="(i) => (activeIndex = i)"
				/>
		</div>
	</main>
</template>

<style scoped>
.main {
	display: flex;
	align-items: center;
	justify-content: center;
}

.right {
	background: var(--color-bg-main);
	padding: 60px 50px;
	border-radius: 0 25px 25px 0;
}

.left {
	width: 500px;
	height: 680px;
	border-radius: 30px;
	background-image: url("/bg.png");
	background-repeat: no-repeat;
	background-size: cover;

	position: relative;

	padding: 50px 30px 85px 30px;
}

.gradient-bg{
	width: 100%;
	height: 100%;

	border-radius: 30px;

	position: absolute;
	left: 0;
	top: 0;

	background: linear-gradient(152.19deg, rgba(136, 235, 239, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%);

	opacity: .8;

	z-index: 0;
}
</style>