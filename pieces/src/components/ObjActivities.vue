<template>
    <div>
        <UnitSummary :unitType="'objectives'"/>
        <el-scrollbar height="350px">
            <Unit v-for="i in objUnits" :unitType="'objectives'"/>
        </el-scrollbar>
        <el-button @click="addObjUnit" color="#FF4949" :icon="Plus" size="large" circle />
        <AvailableBar :unitType="'objectives'" :barTitle="'Man-hour Available'"/>
    </div>
</template>

<script setup lang="ts" name="ObjActivities">
import Unit from './Unit.vue'
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import { reactive } from 'vue'

let objUnits:any = reactive([])

function addObjUnit(){
    objUnits.push(Unit)
}
</script>

<style scoped>

</style>