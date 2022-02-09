<template>
    <ul :class="{ 'basic-menu': isRoot, 'clearfix': true }" >
        <MenuItemComponent v-for="item in items" :key="item.action" :item="item"></MenuItemComponent>
    </ul>
</template>
<script setup lang="ts">
    import MenuItemComponent from './MenuItem.vue';
    import MenuItem from '@/entity/MenuItem';
    const { isRoot, items } = withDefaults(defineProps({
        items: MenuItem,
        isRoot: Boolean
    }), {
        isRoot: false,
    })
</script>
