<template>
    <!-- <p>This is Child Component</p> -->
    <h1>{{ message }}</h1>

    <!-- <button @click="sendUpdate">Click Me</button> -->
</template>

<script setup>
const emit = defineEmits(['update']);

const props = defineProps({
    message: {
        type: String,
        default: 'This is a default value!',
    },
});

const sendUpdate = () => {
    emit('update', 'Value from child');
};
</script>
