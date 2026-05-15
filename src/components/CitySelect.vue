<script setup>
import { ref } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import Button from "./Button.vue";

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
    <Button v-if="!isEdit" @click="isEdit = true;">
        <IconLocation />
        Изменить город
    </Button>
    <div v-if="isEdit">
        <input v-model="city"/>
        <Button @click="select">Сохранить</Button>
    </div>
</template>
