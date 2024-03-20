<template>
    <div>
        <UnitSummary :unitType="'objectives'" :ptsData="objStore.getFunctionPoints"/>
        <el-scrollbar height="350px">
            <Unit v-for="i in objStore.objArray" :unitType="'objectives'"/>
        </el-scrollbar>
        <el-button @click="addObjUnit" color="#FF4949" :icon="Plus" size="large" circle />
        <AvailableBar :unitType="'objectives'" :barTitle="'Man-hour Available'"
        :valMin="objStore.getManhourAvailableLeft" :valMax="objStore.getManhourAvailableMax"/>
    </div>
</template>

<script setup lang="ts" name="ObjActivities">
import Unit from './Unit.vue'
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import { reactive } from 'vue'
import { useObjStore } from '@/stores/allStore'
let objStore = useObjStore()

function addObjUnit(){
    objStore.objArray.push(Unit)
}
</script>

<style scoped>

</style>