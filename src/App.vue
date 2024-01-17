<script setup lang="ts"></script>

<template>
  <el-row :gutter="20" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="16" >
      <router-view />
    </el-col>
  </el-row>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
