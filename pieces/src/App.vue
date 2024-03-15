<template>
  <header>
    <UnitSummary/>
    <Unit/>
    <Unit/>
    <AvailableBar/>
    <el-button color="#5667FF" :icon="Plus" size="large" circle />
  </header>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Unit from './components/Unit.vue'
import UnitSummary from './components/UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './components/AvailableBar.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>

</style>
