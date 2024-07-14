<template>
    <!-- <p>This is Child Component</p> -->
    <h1>{{ props.message }}</h1>

    <!-- <button @click="sendUpdate">Click Me</button> -->
</template>

<script setup lang="ts">
const emit = defineEmits(['update']);

interface Props {
    message: string;
}

const props = defineProps<Props>();

const sendUpdate = () => {
    emit('update', 'Value from child');
};
</script>
