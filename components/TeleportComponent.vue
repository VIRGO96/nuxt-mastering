<template>
    <div>
        <button @click="showModal = true">Show Modal</button>

        <Teleport to="body">
            <div v-if="showModal" class="modal">
                <p>This is a modal!</p>
                <button @click="showModal = false">Close Modal</button>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
const showModal = ref(false);
</script>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0 2px 10px gainsboro;
}
</style>
