<template>
    <div class="basic-mobile-menu visible-xs">
        <nav id="mobile-nav">
            <SubMenu>
                <slot></slot>
            </SubMenu>
        </nav>
    </div>
</template>
<script lang="ts" setup>
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';
</script>
