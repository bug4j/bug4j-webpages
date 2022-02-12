import { defineAsyncComponent } from 'vue';
<template>
    <div class="basic-mobile-menu visible-xs mean-container">
        <div class="mean-bar">
            <a href="javascript:void" class="meanmenu-reveal" ref="toggler"
                style="text-align: center; text-indent: 0px; font-size: 18px;" 
                :class="menuOpen ? '' : 'meanclose'" @click="toggleMenuState">
                <template v-if="!menuOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </template>
                <template v-else>X</template>
            </a>
            <nav id="mobile-nav" class="mean-nav">
                <SubMenu class="basic-mean-menu" :open="menuOpen">
                    <MobileMenuItem v-for="it in items" :item="it" :key="it.title"></MobileMenuItem>
                </SubMenu>
            </nav>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { MenuItemType } from '../../../entity/MenuTypes';
import MobileMenuItem from './MobileMenuItem.vue';
const SubMenu = defineAsyncComponent(() => import('./SubMenu.vue'));
const toggler = ref<HTMLElement>(null as unknown as HTMLElement);
const menuOpen = ref<boolean>(false);
defineProps<{ items: MenuItemType[] }>();
function toggleMenuState() {
    menuOpen.value = !menuOpen.value; 
}
</script>
<style>
    @import url('../static/css/meanmenu.css');
</style>
<style scoped>
    nav {
        max-height: 300px;
        height: 100%;
    }
    .mean-nav ul {
        max-height: 300px;
        overflow-y: auto;
        height: 100%;
    }
</style>
<style>
    .sticky .mean-bar a.meanmenu-reveal {
        color: #444;
        border-color: #444!important;
    }
    .sticky .mean-bar span {
        background: #444 none repeat scroll 0 0!important;
    }
</style>