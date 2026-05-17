<script setup>
import { ref } from 'vue';
import Score from './components/Score.vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';

const score = ref(100);
const isStarted = ref(false);
const card = ref([
	{
		id: "01",
		word: "ball",
		translation: "мяч",
		state: "closed",
		status: "pending"
	},
	{
		id: "02",
		word: "cheese",
		translation: "масло",
		state: "closed",
		status: "pending"
	},
	{
		id: "03",
		word: "shirt",
		translation: "футболка",
		state: "closed",
		status: "pending"
	},
]);

function stateUpdate(index){
	card.value[index].state = card.value[index].state === 'closed' ? 'opened' : 'closed'; 
}

function statusUpdate(index, status){
	card.value[index].status = status; 
}

function toggleIsStarted(){
	isStarted.value = true;
}

</script>

<template>
	<header class="header">
		<h1>Запомни слово</h1>
		<Score :value="score"/>
	</header>
	<main class="main">
		<Button v-if="!isStarted" @click="toggleIsStarted">Начать игру</Button>
		<ul v-else class="card-list">
			<Card v-for="(value, index) in card" :key="index" v-bind="value" @rotate="stateUpdate(index)" @change-status="statusUpdate(index, $event)"/>
		</ul>
	</main>
</template>

<style lang="scss" scoped>
.header{
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 50px 66px;
	box-sizing: border-box;

	&>h1{
		text-transform: uppercase;

		font-size: 16px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 12%;
	}
}

.main{
	min-height: calc(100vh - 148px);

	display: flex;
	align-items: flex-start;
	justify-content: center;

	margin-top: 50px;

	&>.card-list{
		width: 100%;
		margin: 0 62px;

		display: flex;
		justify-content: center;
		gap: 107px;
		flex-wrap: wrap;	
	}
}
</style>