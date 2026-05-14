<script setup>
import Score from './components/Score.vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';

</script>

<template>
	<header class="header">
		<h1>Запомни слово</h1>
		<Score value="100"/>
	</header>
	<main class="main">
		<!-- <Button>Начать игру</Button> -->
		 <Card />
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
	align-items: center;
	justify-content: center;
}
</style>