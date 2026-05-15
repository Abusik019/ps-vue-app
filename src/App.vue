<script setup>
import { reactive, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";

const data = reactive({
	label: "Влажность",
	stat: "90%",
});
const city = ref("");

function getCity(cityName) {
	city.value = cityName;
	data.stat = "30%";
}
</script>

<template>
	<main class="main">
		<span>{{ city }}</span>
		<Stat v-bind="data" />
		<Stat label="Осадки" stat="0%" />
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style scoped>
.main {
	background: var(--color-bg-main);
	padding: 60px 50px;
	border-radius: 25px;
}
</style>