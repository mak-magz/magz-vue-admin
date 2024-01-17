<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

import fbLogo from '../../../assets/fb-logo.svg'
import fbIcon from '../../../assets/fb-icon.webp'

const router = useRouter()
const route = useRoute()
const routes = [...router.options.routes]

type Props = {
  collapse: boolean
}

const activeMenu = computed(() => {
  const { meta, path } = route
  return meta?.activeMenu ?? path
})

const props = defineProps<Props>()

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
    <el-menu mode="vertical" :default-active="activeMenu" @select="handleSelect" :collapse="props.collapse" class="side">
      <el-menu-item id="side-logo" :class="{ 'collapse': props.collapse }">
        <template v-if="props.collapse">
          <img :src="fbIcon" class="icon-logo">
        </template>
        <template v-else>
          <img :src="fbLogo" class="img-logo">
        </template>
      </el-menu-item>
      <SidebarItem v-for="route in routes" :route="route" :key="route.path" :base-path="route.path" />
      <el-menu-item :index="'/logout'"> Logout </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu-item) {
  &.is-active {
    background-color: gainsboro;
  }
}

.el-scrollbar, .el-menu {
  min-width: 0px !important;
}

.side:not(.el-menu--collapse) {
  width: 220px;
}

.side:is(.el-menu--collapse) {
  width: 0px;
  margin-left: -1px;
}

.icon-logo {
  width: 40px;
  margin-left: 10px;
}

.img-logo {
  width: 150px;
  height: 50px;
}

#side-logo {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px;

}
</style>
