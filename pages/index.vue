<template>
    <Banner />

    <!--  -->
    <options-api />

    <br />

    <composition-api />

    <!--  -->

    <h2>Recent Notes: {{ foo }}</h2>
    {{ $hello('Nuxt!') }}
    {{ $consoleIt(foo) }}
    <NoteCard />

    <!--  -->

    <br />
    <br />
    <br />
    <br />
    <br />
    <ChildSlotComponent>
        <template v-slot:header="{ value }">
            <ChildComponent :message="value" />
        </template>
        <template v-slot="{ value }">
            <h1>{{ value }}</h1>
        </template>
        <template v-slot:footer="{ message }">
            <h1>{{ message }}</h1>
        </template>
    </ChildSlotComponent>
</template>

<script setup>
const dynamicValue = ref('Hello from parent!');

const foo = useFoo();
const { $hello, $consoleIt } = useNuxtApp();
console.log('useNextApp(): ', useNuxtApp());

const handleUpdate = (value) => {
    console.log('handleUpdate -->', value);
};
</script>

<style></style>
