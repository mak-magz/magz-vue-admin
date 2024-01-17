<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import path from 'path-browserify'

const props = defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})

// Count the number of visible child routes
const visibleChildCount = computed(() => {
  if (!props.route.children) return 0
  const count = props.route.children.filter((child) => !(child.meta && child.meta.hidden))
  return count.length
})

const onlyChild = computed(() => {
  if (visibleChildCount.value > 1) {
    return null
  }

  if (props.route.children) {
    const route = props.route.children.find((child) => !child.meta?.hidden)
    return route
  }

  return { ...props.route }
})

const resolvePath = (routePath: string) => {
  return path.resolve(props.basePath, routePath)
}
</script>

<template>
  <div v-if="!props.route.meta?.hidden" :class="{ 'first-level': visibleChildCount === 0 }">
    <template v-if="onlyChild && !onlyChild.children">
      <el-menu-item :index="resolvePath(onlyChild.path)">
        {{ onlyChild.meta?.title ?? path.resolve(onlyChild.path) }}

      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="resolvePath(props.route.path)" teleported>
      <template #title> {{ props.route.meta?.title }}</template>
      <template v-if="!!props.route.children">
        <SidebarItem
          v-for="childRoute in props.route.children"
          :route="childRoute"
          :key="childRoute.path"
          :base-path="resolvePath(childRoute.path)"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped>
.first-level {
  :deep(.el-sub-menu) {
    .el-sub-menu__icon-arrow {
      display: none;
    }

    span {
      visibility: hidden;
    }
  }
}
</style>
