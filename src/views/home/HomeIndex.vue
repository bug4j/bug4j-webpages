<template>
  <div class="home-index">
		<Header />
		<BasicSlider />
		<Portfolio />
		<BlogListSimple />
		<Footer />
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import Header from "./components/StickHeader.vue";
import Portfolio from "./components/Portfolio.vue";
import BasicSlider from "./components/BasicSlider.vue";
import BlogListSimple from '@/views/home/components/BlogListSimple.vue';
import Footer from "./components/Footer.vue";
</script>
<style>

</style>