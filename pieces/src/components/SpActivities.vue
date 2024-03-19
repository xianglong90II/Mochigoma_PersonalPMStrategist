<template>
    <div>
        <UnitSummary :unit-type="'support'" :ptsData="spStore.getConcentration"/>
        <PersonalStatus/>
        <el-scrollbar height="300px">
            <SpUnit v-for="spUnit in spUnits" ></SpUnit>
        </el-scrollbar>
        <el-button @click="addSpUnit()" color="#5AFF75" :icon="Plus" size="large" circle />
        <AvailableBar :unitType="'support'" :barTitle="'Energy Left'" 
        :valMin="spStore.getEnergyLeft" :valMax="spStore.getEnergyMax"/>
    </div>
</template>

<script setup lang="ts" name="SpActivities">
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import PersonalStatus from './PersonalStatus.vue'
import SpUnit from './SpUnit.vue'
import {ref,reactive,computed} from 'vue'
import {useSpStore} from '../stores/allStore'
let spStore = useSpStore()


// function adds units
let spUnits:Array<any> = spStore.spArray
function addSpUnit(){
    spUnits.push(SpUnit)
}


</script>

<style scoped>

</style>