<template>
    <div class="menu-area hidden-xs">
        <nav>
            <SubMenu :items="items" isRoot />
        </nav>
    </div>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue';
import MenuItem from '@/entity/MenuItem';
const { items } = defineProps<{ items: MenuItem[] }>();
</script>
