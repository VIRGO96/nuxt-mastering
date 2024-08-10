<template>
    <div>
        <Navbar />
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup></script>

<style>
main {
    padding: 1rem;
}
</style>
