<template>


    <div>


        <input v-model="inputValue" type="text" @keydown.enter="updateValue">
        <button :disabled="inputValue.length== 0" @click="updateValue">{{props.btnLabel}}</button>
    </div>
</template>
<script setup>


import { ref } from 'vue';

const props = defineProps({
    btnLabel: {
        type: String,
        default: "Ajouter"
    }
});

const inputValue = ref("test");


const emit = defineEmits(['newValues']);


function updateValue() {

    // m'assurer que il y a des données, sinon on arrête
    if (inputValue.value.length == 0) return {

    };
    // emettre un event vers le parent

    emit("newValues", inputValue.value);
    // vider le champs texte
    inputValue.value = "";
}





</script>
<style scoped lang='scss'>
div {
    display: flex;
    gap: .5em;

    input {
        flex-basis: 70%;
    }

    button {
        flex-basis: 30%;
    }
}
</style>