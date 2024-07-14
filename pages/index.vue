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
    <!-- <ChildSlotComponent>
        <template v-slot:header="{ value }">
            <ChildComponent :message="value" />
        </template>
        <template v-slot="{ value }">
            <h1>{{ value }}</h1>
        </template>
        <template v-slot:footer="{ message }">
            <h1>{{ message }}</h1>
        </template>
    </ChildSlotComponent> -->

    <TeleportComponent />

    <button @click="show = !show">Toggle</button>
    <transition>
        <p v-if="show">Hello, Nuxt</p>
    </transition>
    <transition name="fade">
        <p v-if="show">Hello, Named Transition</p>
    </transition>
</template>

<script setup>
const counterStore = useCounterStore();

const dynamicValue = ref('Hello from parent!');
const show = ref(true);

const foo = useFoo();
const { $hello, $consoleIt } = useNuxtApp();
console.log('useNextApp(): ', useNuxtApp());

const handleUpdate = (value) => {
    console.log('handleUpdate -->', value);
};
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
