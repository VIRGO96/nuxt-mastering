<template>
    <h1>Notes</h1>
    <br>
    <button @click="boolean=!boolean">Add New {{ boolean }}</button>
    <br>

     <!-- <component :is="boolean ? newNote : noteCard" /> -->

    <NewNote/>  

    <br>
    <br>
    
    <NoteCard/>
  
</template>

<script setup>
const newNote = resolveComponent('NewNote')
const noteCard = resolveComponent('NoteCard')

const boolean=ref(false)
</script>

<style>

.flex{
     display: flex;
}

</style>