<script lang="ts" setup>
import { ref } from 'vue';
import SideBar from './components/Sidebar/sidebar-index.vue'

const collapse = ref(false)
</script>
<template>
  <div class="common-layout">
    <el-container>
      <SideBar :collapse="collapse" class="sidebar" :class="{'collapse': collapse}"/>
      <el-container>
        <el-header>
          <div>
            <el-button type="primary" size="default" @click="collapse = !collapse">side</el-button>
            
          </div>
        </el-header>
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
  background-color: green;
  display: flex;

  .el-container {
    flex-grow: 1;
    background-color: blue;
  }
  .el-aside {
    height: 100vh;
    background-color: aliceblue;
  }
}

.sidebar {
  // flex: auto;
  min-width: 0px;
  max-width: 220px;
  width: fit-content;
  height: 100vh;
  background-color: red;
  // transition: width 0.35s;
  // &.collapse {
  //   transition-duration: 1s;
  //   transform: translate3d(calc(50px - 220px), 0, 0);
  // }
}
</style>
