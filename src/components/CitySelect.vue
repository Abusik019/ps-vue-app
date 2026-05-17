<script setup>
import { ref } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";

const isEdit = ref(false);
const city = ref('');

const emit = defineEmits({
    selectCity(payload) {
        return payload;
    },
});

function select() {
    emit("selectCity", city.value);
    isEdit.value = false;
}
</script>

<template>
    <div v-if="isEdit" class="input-city-block">
        <Input v-model="city" placeholder="Введите город"/>
        <Button @click="select">Сохранить</Button>
    </div>
    <Button v-else @click="isEdit = true;">
        <IconLocation />
        Изменить город
    </Button>
</template>

<style lang="scss" scoped>
.input-city-block{
    width: 100%;

    display: flex;
    align-items: center;
    gap: 12px;

    &>button{
        width: 40%;
    }
}
</style>
