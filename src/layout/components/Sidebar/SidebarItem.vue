<script lang="ts" setup>
import { type PropType } from "vue"
import { type RouteRecordRaw } from "vue-router"
import path from "path-browserify"

const props = defineProps({
    route: {
        type: Object as PropType<RouteRecordRaw>,
        required: true
    }
})

</script>

<template>
    <div v-if="!props.route.meta?.hidden">
        <!-- TODO: Check for nested route -->
        <el-menu-item :index="path.resolve(route.path)">
            {{ props.route.meta?.title ?? path.resolve(route.path) }}
        </el-menu-item>
    </div>
</template>
