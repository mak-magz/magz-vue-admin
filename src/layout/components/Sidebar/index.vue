<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue'

const activeIndex = ref('1')
// const activeIndex2 = ref('1')
const handleSelect = (key: string) => {
  console.log(key)
  key === "1" ? nav("/dashboard") : key === "2" ? nav("add") : nav("/logout")
}

function nav(route: string) {
    router.replace(route)
}
</script>

<template>
    <el-scrollbar>
       <el-menu mode="vertical" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="1" >DASHBOARD</el-menu-item>
            <el-menu-item index="2" >ADD</el-menu-item>
            <el-menu-item index="3" >LOGIN</el-menu-item>

       </el-menu>
    </el-scrollbar>
    <!-- <div>sidebar</div> -->
</template>

<style scoped>
    .el-menu {
        height: max-content;
    }

    .el-menu {

    }
</style>