<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const route = useRoute()
const routes = [...router.options.routes]

const activeMenu = computed(() => {
  const { meta, path } = route
  return meta?.activeMenu ?? path
})

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
    <el-menu mode="vertical" :default-active="activeMenu" @select="handleSelect">
      <SidebarItem v-for="route in routes" :route="route" :key="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu-item) {
  &.is-active {
    background-color: gainsboro;
  }
}
</style>
