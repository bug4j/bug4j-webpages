<template>
    <div class="menu-area hidden-xs">
        <nav>
            <SubMenu :items="items" class="basic-menu" @itemClicked="item => $emit('menuClicked',item)" />
        </nav>
    </div>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue';
import { MenuItemType } from '@/entity/MenuTypes';
const { items } = defineProps<{ items: MenuItemType[] }>();
const $emit = defineEmits(['menuClicked']);
</script>
<style> 
</style>
