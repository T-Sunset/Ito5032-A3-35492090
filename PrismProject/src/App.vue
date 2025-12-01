<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Navbar/>
    <div class="rainbow-accent-line"></div>
    <main class="container py-5">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped></style>
