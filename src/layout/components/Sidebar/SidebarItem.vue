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
  const count = props.route.children.filter(child => !(child.meta && child.meta.hidden))
  return count.length
})

const hasOnlyOneVisibleChild = computed(() => visibleChildCount.value === 1)

const onlyChild = computed(() => {
  if (visibleChildCount.value > 1) {
    return null
  }

  if (hasOnlyOneVisibleChild.value) {
    const route = props.route.children?.find(child => !child.meta?.hidden)
    return route
  }

  return { ...props.route }
})

const resolvePath = (routePath: string) => {
  return path.resolve(props.basePath, routePath)
}
</script>

<template>
  <div v-if="!props.route.meta?.hidden">
    <template v-if="hasOnlyOneVisibleChild && onlyChild">
      <el-menu-item :index="resolvePath(onlyChild.path)">
        {{ onlyChild.meta?.title ?? path.resolve(onlyChild.path) }}
      </el-menu-item>
    </template>
    <!-- TODO: Display routes with children -->
    <template v-else>
      <el-menu-item :index="path.resolve(route.path)">
        has children
      </el-menu-item>
    </template>
  </div>
</template>
