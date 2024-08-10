<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            <NuxtLink :to="`/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
            <span>{{ todo.isCompleted }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
defineProps({
    todos: {
        type: Array as PropType<
            Array<{ id: number; title: string; isCompleted: boolean }>
        >,
    },
});
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9f9;
}
</style>
