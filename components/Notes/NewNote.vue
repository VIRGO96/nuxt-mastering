<template>
    <input
        v-model="newNote"
        v-focus
        type="text"
        placeholder="Type New Note...."
    />
</template>

<script setup>
const newNote = ref('This is pre written value!');

const vFocus = {
    mounted: (el) => el.focus(),
};
</script>
