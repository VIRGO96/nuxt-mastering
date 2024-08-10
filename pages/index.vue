<template>
    <div>
        <Banner />

        <br />

        <TodoList :todos="recentTodos" />
    </div>
</template>

<script setup>
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

const recentTodos = computed(() => todos.value.slice(-3).reverse());
</script>

<style></style>
