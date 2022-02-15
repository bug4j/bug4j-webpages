<template>
<div class="basic-blo-area gray-bg pt-90 pb-30">
			<div class="container">
				<AreaTitle>最新文章</AreaTitle>
				<div class="row">
					<BlogListItem v-for="item in 6" :key="item"></BlogListItem>
				</div>
			</div>
		</div>
</template>
<script setup lang="ts">
import AreaTitle from './AreaTitle.vue';
  	import BlogListItem from './BlogListItem.vue';
</script>
<style lang="less">
	.swiper-next, .swiper-pre {
		display: inline-flex;
		width: 48px;
		height: 48px;
		background-color: #efefef61;
		justify-content: center;
		align-content: center;
		align-items: center;
		user-select: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 9999;
		transition: background 0.2s ease-in-out;
		&:active {
			background: #efefef;
		}

		.ion-icon {
			font-size: 18px;
		}
	}
	.swiper-pre {
		left: 8px;
	}
	.swiper-next {
		right: 8px;
	}
</style>