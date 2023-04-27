<script lang="ts" setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';

const router = useRouter();

const routes = [...router.options.routes];

const activeIndex = ref('1')
const handleSelect = (key: string) => {
    console.log(key)
    nav(key)
}

function nav(route: string) {
    router.push(route)
}

</script>

<template>
    <el-scrollbar>
        <el-menu mode="vertical" :default-active="activeIndex" @select="handleSelect">
            <SidebarItem v-for="route in routes" :route="route" />
        </el-menu>
    </el-scrollbar>
</template>

<style lang="scss" scoped>

</style>
