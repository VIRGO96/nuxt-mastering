<template>
<h1>About</h1>

<button @click="enableLayout()">Update Layout</button>
</template>

<script setup>
definePageMeta({
    layout:false,
})

function enableLayout(params) {
    setPageLayout('custom')    
}
</script>