<template>
    <li>
        <a :href="item.action" @click.prevent="emits('itemClicked', item)">{{ item.title }}</a>
        <template v-if="item?.children?.length">
            <SubMenu :open="menuOpen">
                <MobileMenuItem v-for="it in item.children" :item="it" :key="it.title" @itemClicked="emits('itemClicked', item)"></MobileMenuItem>
            </SubMenu>
            <a class="mean-expand" :class="menuOpen ? 'mean-clicked' : ''" @click="menuOpen = !menuOpen" href="javascript:void" style="font-size: 18px"></a>
        </template>
    </li>
</template>
<script setup lang="ts">
    import SubMenu from './SubMenu.vue';
    import { MenuItemType } from '../../../entity/MenuTypes';
    import { ref } from 'vue';
    const emits = defineEmits(['itemClicked']);
    const { item } = defineProps<{ item: MenuItemType }>();
    const menuOpen = ref<boolean>(false);

</script>
<style lang="less">
    .mean-expand {
        &::before {
            content:"+";
        }
        &.mean-clicked::before {
            content: "-";
        }
    }
</style>