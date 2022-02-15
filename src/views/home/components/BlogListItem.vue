<template>
    <div class="col-sm-6 col-md-4 blog-item">
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
    </div>
</template>
<script setup lang="ts">
    import 'swiper/css';
	import 'swiper/css/navigation';
	import { reactive } from 'vue';
	import { Navigation, A11y } from 'swiper';
	import { Swiper, SwiperSlide, } from 'swiper/vue';
	const swiperModules = reactive([ Navigation, A11y ]);
	const navigation = reactive({ nextEl:'.swiper-next',prevEl:'.swiper-pre' })
</script>