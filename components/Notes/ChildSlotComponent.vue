<template>
    <div>
        <header>
            <slot name="header" :value="value">Default Header</slot>
        </header>
        <main>
            <slot :value="mainValue"></slot>
        </main>
        <footer>
            <slot name="footer" :message="footerValue">Default Footer</slot>
        </footer>
    </div>
</template>

<script setup>
const value = ref('Header');
const mainValue = ref('Main Section');
const footerValue = ref('Footer');
</script>
