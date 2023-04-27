<script lang="ts" setup>
import SideBar from "./components/Sidebar/index.vue"

</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside id="side-nav" width="220px">
                <SideBar />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.common-layout {
    min-width: 100% !important;
    min-height: 100% !important;

    .el-aside {
        height: 100vh;
        background-color: aliceblue;
    }
}
</style>
