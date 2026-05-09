<script setup>
	const getCurrentDate = () => {
		const now = new Date();
		return now.toLocaleDateString('ru-RU');
	};
</script>

<template>
  <div>Сегодня: {{ getCurrentDate() }}</div>
</template>

<style scoped></style>