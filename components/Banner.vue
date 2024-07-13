<template>
    <h1 :class="isRed ? 'isRed' : 'isGreen'" v-debug>
        Welcome To Out Notes App!
    </h1>

    <button @click="isRed = !isRed">Update IsRED</button>
</template>

<script setup lang="ts">
const isRed = ref(false);

// onBeforeMount(() => {
//     alert('This alert is from onBeforeMount');
// });

// onMounted(() => {
//     alert('This alert is from onMounted');
// });

// onBeforeUpdate(() => {
//     alert('This alert is from onBeforeUpdate');
// });

// onUpdated(() => {
//     alert('This alert is from onUpdated');
// });

// onBeforeUnmount(() => {
//     alert('onBeforeUnmount');
// });

// onUnmounted(() => {
//     alert('This alert is from onUnmounted');
// });

// watch(isRed, (newValue, preValue) => {
//     console.log('New Value is:', newValue, ' Old value was:', preValue);
// });
watch(
    () => isRed.value,
    (newValue, preValue) => {
        console.log('New Value is:', newValue, ' Old value was:', preValue);
    },
    { immediate: true }
);
</script>

<style>
.isRed {
    color: red;
}

.isGreen {
    color: green;
}
</style>
