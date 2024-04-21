<template>
    <div class="main">
        <UnitSummary :unitType="'working'" :ptsData="wkStore.getManhourPts"/>
        <el-scrollbar height="350px">
            <Unit v-for="i in wkStore.wkArray" :unitType="'working'"/>
        </el-scrollbar>
        <div class="btn">
            <el-button @click="addWkUnit" color="#5667FF" :icon="Plus" style="width: 100%; height: 100%;" circle />
        </div>
        <AvailableBar :unitType="'working'" :barTitle="'userInterface.concentration'" 
        :valMin="wkStore.getConcentrationLeft" :valMax="wkStore.getConcentrationMax"/>
        <AvailableBar :unitType="'working'" :barTitle="'userInterface.workableTime'" 
        :valMin="wkStore.getWorkableTimeLeft" :valMax="wkStore.getWorkableTimeMax"/>
    </div>
</template>

<script setup lang="ts" name="WkActivities">
import Unit from '@/components/Unit.vue';
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import {useWkStore} from '@/stores/allStore'
let wkStore = useWkStore()

// let wkUnits:any = reactive([])

function addWkUnit(){
    wkStore.wkArray.push(Unit)
}

</script>

<style scoped>
.btn {
    position: relative;
    height: 3rem;
    width: 3rem;
    left: 85%;
    padding-bottom: 2%;
}
</style>