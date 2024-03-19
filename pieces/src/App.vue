<template>
  <header>
    <el-header>
      <h4>这是头部</h4>
    </el-header>
    <el-main>
    <el-container direction="horizontal" flex justify-content="space-between" align-items="stretch">
        <div>
          <SpActivities/>
        </div>
        <div>
          <WkActivities/>
        </div>
        <div>
          <ObjActivities/>
        </div>
        
      </el-container>
    </el-main>
    <el-footer>
      <p>这是底部</p>
    </el-footer>
  </header>

</template>

<script setup lang="ts">
import SpActivities from './components/SpActivities.vue'
import WkActivities from './components/WkActivities.vue'
import ObjActivities from './components/ObjActivities.vue'

</script>

<style scoped>

</style>
