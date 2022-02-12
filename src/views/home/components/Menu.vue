<template>
    <div class="menu-area hidden-xs">
        <nav>
            <SubMenu :items="items" class="basic-menu" />
        </nav>
    </div>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue';
import { MenuItemType } from '@/entity/MenuTypes';
const { items } = defineProps<{ items: MenuItemType[] }>();
</script>
<style> 
</style>
