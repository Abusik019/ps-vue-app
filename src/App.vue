<script setup>
import { ref } from 'vue';
import Score from './components/Score.vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';

const score = ref(0);
const isStarted = ref(false);
const cards = ref([]);

const SCORE_SUCCESS = 10;
const SCORE_FAIL = 4;

function stateUpdate(index) {
	const current = cards.value[index];
	if (!current || current.status !== 'pending') {
		return;
	}
	current.state = current.state === 'closed' ? 'opened' : 'closed';
}

function statusUpdate(index, status) {
	const current = cards.value[index];
	if (!current || current.status !== 'pending') {
		return;
	}

	current.status = status;
	current.state = 'closed';
	if (status === 'success') {
		score.value += SCORE_SUCCESS;
	} else if (status === 'failed') {
		score.value -= SCORE_FAIL;
	}
}

async function fetchCards() {
	const res = await fetch('http://localhost:8080/api/random-words');

	if (res.status !== 200) {
		cards.value = [];
		return false;
	}

	const data = await res.json();
	cards.value = data.map((item) => ({
		...item,
		state: 'closed',
		status: 'pending'
	}));
	return true;
}

async function startGame() {
	isStarted.value = true;
	await fetchCards();
}


</script>

<template>
	<header class="header">
		<h1>Запомни слово</h1>
		<Score :value="score"/>
	</header>
	<main class="main">
		<Button v-if="!isStarted" @click="startGame">Начать игру</Button>
		<ul v-else class="card-list">
			<Card
				v-for="(value, index) in cards"
				:key="index"
				v-bind="value"
				@rotate="stateUpdate(index)"
				@change-status="statusUpdate(index, $event)"
			/>
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
		padding: 0;

		display: grid;
		grid-template-columns: repeat(4, 250px);
		justify-content: center;
		gap: 40px;
	}
}
</style>