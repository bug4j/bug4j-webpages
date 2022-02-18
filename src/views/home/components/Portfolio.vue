<template>
    <div class="basic-portfolio-area ptb-90">
		<div class="container">
			<div class="mb-20 area-title text-center" style="margin-bottom: 16px">
				<h2>摄影动态</h2>
				<p></p>
			</div>
			<div class="filter-menu text-center mb-40">
				<button data-filter="*" @click="filterGrid('*')">所有</button>
				<button data-filter=".branding" @click="filterGrid('.branding')">风景</button>
				<button data-filter=".graphic" @click="filterGrid('.graphic')">人文</button>
				<button data-filter=".design" @click="filterGrid('.design')">设计</button>
				<button data-filter=".video" @click="filterGrid('.video')">视频</button>
			</div>			
			<div ref="grid" id="portfolio-grid" class="row-portfolio portfolio-style-2">
				<div class="portfolio-item branding video">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/m-project1.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-link" href="/images/home/m-project1.jpg"><span class="icon-focus"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item graphic">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/m-project2.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-video" href="javascript:;"><span class="icon-video "></span></a>									
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item video">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/m-project2.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-link" :href="'/images/home/m-project2.jpg'"><span class="icon-focus"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item graphic">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/m-project1.jpg'" alt="">
							<div class="view-icon">
								<a href="portfolio-single.html"><span class="icon-attachment"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item branding design">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/m-project3.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-video" href="javascript:;"><span class="icon-video "></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item graphic video">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/project4.jpg'" alt="">
							<div class="view-icon">
								<a href="portfolio-single.html"><span class="icon-attachment"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item branding design">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/project5.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-link" :href="'/images/home/project5.jpg'"><span class="icon-focus"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/project6.jpg'" alt="">
							<div class="view-icon">
								<a class="popup-link" :href="'/images/home/project6.jpg'"><span class="icon-focus"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
				<div class="portfolio-item design">
					<div class="portfolio-wrapper">
						<div class="portfolio-thumb">
							<img :src="'/images/home/project7.jpg'" alt="">
							<div class="view-icon">
								<a href="portfolio-single.html"><span class="icon-attachment"></span></a>
							</div>
						</div>
						<div class="portfolio-caption text-left">
							<h4><a href="portfolio-single.html">Basic Portfolio Tile</a></h4>
							<div class="work-tag">
								<a href="#">Design</a>,
								<a href="#">Photography</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="view-more mt-20 text-center">
				<a class="btn btn-large" href="#">View More</a>
			</div>			
		</div>
	</div>
</template>
<script setup lang="ts">
	import Isotope from 'isotope-layout';
	import imagesLoaded from 'imagesloaded'
	import { ref, onMounted } from 'vue';
	const grid = ref<HTMLElement>(null as unknown as HTMLElement);
	let isoGrid:Isotope = null as unknown as Isotope;
	function filterGrid(key:string) {
		isoGrid.arrange({ filter: key });
	}
	onMounted(async () => {
		await new Promise(resolve => imagesLoaded('#portfolio-grid', resolve));
		isoGrid = new Isotope('#portfolio-grid', {
			itemSelector: ".portfolio-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".portfolio-item",
			},
		});
	});
</script>

<style lang="less">
	.portfolio-caption {
		filter: drop-shadow(1px 1px 0.5px #0008);
		&, a {
			color: #fff;
		}
	}
</style>