<script setup>
import { 
    onMounted,
    ref, 
    // onWatcherCleanup, watch, watchEffect 
} from "vue";
import IconLocation from "../icons/IconLocation.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";

const isEdit = ref(false);
const city = ref('Moscow');
const emit = defineEmits({
    selectCity(payload) {
        return payload;
    },
});

// watch(city, () => {
//     console.log("New City: " + city.value)
//     onWatcherCleanup(() => {
//         console.log('clean up');
//     })
// }, { immediate: true, once: true })

// watchEffect(() => {
//     console.log(city.value);
//     console.log(isEdit.value);
// })

onMounted(() => {
    emit("selectCity", city.value);
})

function select() {
    emit("selectCity", city.value);
    isEdit.value = false;
}
</script>

<template>
    <div v-if="isEdit" class="input-city-block">
        <Input v-model="city" placeholder="Введите город" @keyup.enter="select"/>
        <Button @click="select">Сохранить</Button>
    </div>
    <Button v-else class="save-btn" @click="isEdit = true;">
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

    margin-top: 70px;

    &>button{
        width: 40%;
    }
}

.save-btn{
    margin-top: 70px;
}
</style>
