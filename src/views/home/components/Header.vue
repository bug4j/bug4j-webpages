<template>
    <header ref="headerRef">
        <div class="header-wrapper container">
            <div class="logo">
                WHITE
            </div>
            <el-menu mode="horizontal" background-color="#0000" text-color="#fff" active-text-color="#fff">
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

</script>
<style lang="less" scoped>
    header {
        --color-background: transparent;
        position: absolute;
        z-index: 1000;
        width: 100%;
        background: transparent;
        border-bottom: 1px solid #e6e6e6;
        color: #fff;
        word-spacing: 2px;
        &.fixed {
            position: fixed;
        }
    }
    .header-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .el-menu.el-menu--horizontal {
        flex: 1;
        justify-content: end;
        border-bottom: none;
        color: #fff;
    }
</style>
