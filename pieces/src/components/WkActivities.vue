<template>
    <div>
        <UnitSummary :unitType="'working'"/>
        <el-scrollbar height="350px">
            <Unit v-for="i in wkStore.wkArray" :unitType="'working'"/>
        </el-scrollbar>
        <el-button @click="addWkUnit" color="#5667FF" :icon="Plus" size="large" circle />
        <AvailableBar :unitType="'working'" :barTitle="'Concentration'"/>
        <AvailableBar :unitType="'working'" :barTitle="'Workable Time'"/>
    </div>
</template>

<script setup lang="ts" name="WkActivities">
import Unit from './Unit.vue';
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import {reactive} from 'vue'
import {useWkStore} from '../stores/allStore'
let wkStore = useWkStore()

// let wkUnits:any = reactive([])

function addWkUnit(){
    wkStore.wkArray.push(Unit)
}

</script>

<style scoped>

</style>