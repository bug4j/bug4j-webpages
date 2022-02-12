<template>
<div class="basic-blo-area gray-bg pt-90 pb-30">
			<div class="container">
				<div class="area-title text-center">
					<h2>最新文章</h2>
					<p></p>
				</div>
				<div class="row">
					<div class="col-sm-6 col-md-4 blog-item">
						<!-- POST -->
						<article class="post">
							<div class="post-thumbnail">
								<img :src="'/images/home/1.jpg'" alt="">
							</div>
							<div class="post-header">
								<div class="post-meta">
									By <a href="#">Mark Stone</a>, 23 November, 2021
								</div>
								<h2 class="post-title"><a href="blog-single.html">The Ultimate Renters Guide</a></h2>
							</div>
							<div class="post-content">
								<p>Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.</p>
								<a class="post-more" href="blog-single.html">Read more &rarr;</a>
							</div>
						</article>
						<!-- /POST -->
					</div>
					<div class="col-sm-6 col-md-4 blog-item">
						<!-- POST -->
						<article class="post">
							<div class="post-thumbnail">
								<img :src="'/images/home/1.jpg'" alt="">
							</div>
							<div class="post-header">
								<div class="post-meta">
									By <a href="#">Mark Stone</a>, 23 November, 2021
								</div>
								<h2 class="post-title"><a href="blog-single.html">Living Big in Tiny Houses</a></h2>
							</div>
							<div class="post-content">
								<p>Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.</p>
								<a class="post-more" href="blog-single.html">Read more &rarr;</a>
							</div>
						</article>
						<!-- /POST -->
					</div>					
					<div class="col-sm-6 col-md-4 blog-item">
						<!-- POST -->
						<article class="post">
							<Swiper loop :modules="swiperModules" :navigation="navigation" class="post-thumbnail blog-slider">
								<SwiperSlide>
									<img :src="'/images/home/6.jpg'" alt="">
								</SwiperSlide>
								<SwiperSlide>
									<img :src="'/images/home/7.jpg'" alt="">
								</SwiperSlide>
								<SwiperSlide>
									<img :src="'/images/home/3.jpg'" alt="">
								</SwiperSlide>
								<span class="swiper-next"><i class="ion-icon ion-ios-arrow-right"></i></span>
								<span class="swiper-pre"><i class="ion-icon ion-ios-arrow-left"></i></span>
							</Swiper>
							<div class="post-header">
								<div class="post-meta">
									By <a href="#">Mark Stone</a>, 23 November, 2021
								</div>
								<h2 class="post-title"><a href="blog-single.html">The Ultimate Renters Guide</a></h2>
							</div>
							<div class="post-content">
								<p>Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.</p>
								<a class="post-more" href="blog-single.html">Read more &rarr;</a>
							</div>
						</article>
						<!-- /POST -->
					</div>
				</div>

			</div>
		</div>
</template>
<script setup lang="ts">
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide, } from 'swiper/vue';
	import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
	import { ElIcon } from 'element-plus';
  	import 'swiper/css';
	import 'swiper/css/navigation';
	import { reactive } from 'vue';
	const swiperModules = reactive([ Navigation, A11y ]);
	const navigation = reactive({ nextEl:'.swiper-next',prevEl:'.swiper-pre' })
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