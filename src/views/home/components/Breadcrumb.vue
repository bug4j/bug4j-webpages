<template>
    <div class="basic-breadcrumb-area gray-bg ptb-70">
        <div class="container">
            <div class="basic-breadcrumb text-center">
                <h3 class="">{{ $route.meta.title }}</h3>
                <ol class="breadcrumb text-xs">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">404</li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    defineProps<{ title?:string, crumbs?:[] }>();
    const $route = useRoute();
</script>