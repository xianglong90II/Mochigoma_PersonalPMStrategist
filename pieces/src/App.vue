<template>
    <el-header height="8%">
      
    </el-header>
    <el-main>

      <el-container justify-content="space-between" align-items="stretch">
        <el-row :gutter="25">
          <el-col :span="7">
            <SpActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="7">
            <WkActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="7">
            <ObjActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="3">
            <CreditResult />
          </el-col>
        </el-row>
      </el-container>
    </el-main>
    <el-footer height="8%">
    </el-footer>

</template>

<script setup lang="ts">
import SpActivities from './components/SpActivities.vue'
import WkActivities from './components/WkActivities.vue'
import ObjActivities from './components/ObjActivities.vue'
import creditResult from './components/CreditResult.vue';

</script>

<style scoped>
el-main {
  background-color: #FCFCFC;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
