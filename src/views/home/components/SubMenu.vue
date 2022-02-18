<template>
    <ul :class="{ open: open, clearfix: true }">
        <slot>
            <MenuItem v-for="item in items" :key="item.title" :item="item" @itemClicked="it => emits('itemClicked', it)"></MenuItem>
        </slot>
    </ul>
</template>
<script setup lang="ts">
    import MenuItem from './MenuItem.vue';
    import { MenuItemType } from '@/entity/MenuTypes';
    defineProps<{ items?: MenuItemType[], open?:boolean }>();
    const emits = defineEmits(['itemClicked']);
</script>
<style scoped>
    @media (max-width: 768px) {
        ul {
            display: none;
        }
        ul.open {
            display: block;
        }
    }
</style>
