<template>
    <div>
        <h1>{{ todo?.title }}</h1>
        <p>{{ todo?.description }}</p>

        <hr class="my-5" />

        <p>Completed : {{ todo?.isCompleted }}</p>
        <p>Created At :{{ todo?.createdAt }}</p>

        <NuxtLink :to="`/todos/edit/${todo?.id}`" class="btn">Edit</NuxtLink>

        <button
            @click="todoStore.updateMarkCompletedStatus(todoId)"
            :class="todo?.isCompleted ? 'btn-danger' : 'btn-success'"
        >
            {{
                todo?.isCompleted
                    ? 'Mark As Not Completed'
                    : 'Mark as Completed'
            }}
        </button>

        <button @click="handleDelete" class="btn-danger">Delete Todo</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'rotate',
    },
});

useSeoMeta({
    title: 'Nuxt - Todo Details',
    description: 'Nuxt Todo App - Details Page',
});

const route = useRoute();
const router = useRouter();
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const todoId = Number(route?.params?.id);
const todo = computed(() => todos.value.find((t) => t.id === todoId));

const handleDelete = async () => {
    todoStore.deleteTodo(todoId);
    router.push(`/todos`);
};
</script>

<style>
.btn {
    background-color: #007bff;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn:hover {
    background-color: #0056b3;
    color: #ffff;
}

.btn-success {
    background-color: #28a745;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn-success:hover {
    background-color: #218838;
}

.btn-danger {
    background-color: #dc3545;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn-danger:hover {
    background-color: #c62828;
}
</style>
