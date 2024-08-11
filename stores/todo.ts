export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Array<{
            id: number;
            title: string;
            description: string;
            isCompleted: boolean;
            createdAt: string;
        }>,
    }),

    actions: {
        async fetchTodos() {
            try {
                const { data, error } = await useFetch('/api/todos');

                if (error.value) {
                    throw new Error('Failed to fetch todos');
                }
                if (data.value) {
                    this.todos = data?.value.data;
                }
            } catch (error) {
                console.error('Failed to fetch todos', error);
            }
        },

        async addTodo(todo: {
            id: number;
            title: string;
            description: string;
            isCompleted: boolean;
            createdAt: string;
        }) {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'POST',
                    body: todo,
                });

                if (error.value) {
                    throw new Error('Failed to add todos');
                }
                if (data.value) {
                    this.todos.push(data?.value.data);
                }
            } catch (error) {
                console.error('Failed to add todos', error);
            }
        },

        async updateTodo(updateTodo: {
            id: number;
            title: string;
            description: string;
            isCompleted: boolean;
            createdAt: string;
        }) {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'PUT',
                    body: updateTodo,
                });

                if (error.value) {
                    throw new Error('Failed to update todos');
                }
            } catch (error) {
                console.error('Failed to update todos', error);
            }
        },

        async deleteTodo(id: number) {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'DELETE',
                    body: { id },
                });

                if (error.value) {
                    throw new Error('Failed to delete todo');
                }
            } catch (error) {
                console.error('Failed to delete todo', error);
            }
        },

        async updateMarkCompletedStatus(id: number) {
            const index = this.todos.findIndex((todo) => todo.id === id);

            if (index === -1) {
                return 'Error';
            }
            const updateTodo = {
                ...this.todos[index],
                isCompleted: !this.todos[index].isCompleted,
            };

            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'PUT',
                    body: updateTodo,
                });

                if (error.value) {
                    throw new Error('Failed to update todos');
                }
            } catch (error) {
                console.error('Failed to update todos', error);
            }

            if (index !== -1) {
                this.todos[index].isCompleted = !this.todos[index].isCompleted;
            }
        },
    },
});
