<template>
  <div class="home-index">
		<Header></Header>
		<BasicSlider hash="basicslider"/>
		<Portfolio hash="protfolio"/>
		<BlogListSimple hash='bloglist'/>
		<Footer />
  </div>
</template>
<script lang="ts" setup>
	import { onMounted } from 'vue';
	import Header from "./components/StickHeader.vue";
	import Portfolio from "./components/Portfolio.vue";
	import BasicSlider from "./components/BasicSlider.vue";
	import BlogListSimple from '@/views/home/components/BlogListSimple.vue';
	import Footer from "./components/Footer.vue";
	import navHashLink from "@/plugins/hashLinkNavigator";
	import imagesLoaded from 'imagesloaded';
	onMounted(async () => {
		await new Promise(resolve => imagesLoaded('.home-index', resolve));
		navHashLink();
	});
</script>
<style>

</style>