<template>
    <div height="100%">
        <UnitSummary :unit-type="'support'" :ptsData="spStore.getConcentration"/>
        <PersonalStatus/>
        <el-scrollbar height="300px">
            <SpUnit v-for="(spUnit,index) in spStore.spArray" :key="index"></SpUnit>
        </el-scrollbar>
        <div class="btn">
            <el-button @click="addSpUnit()" color="#5AFF75" :icon="Plus" style="width: 100%; height: 100%;" circle />
        </div>
        <AvailableBar :unitType="'support'" :barTitle="'userInterface.energyLeft'" 
        :valMin="spStore.getEnergyLeft" :valMax="spStore.getEnergyMax"/>
    </div>
</template>

<script setup lang="ts" name="SpActivities">
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import PersonalStatus from './PersonalStatus.vue'
import SpUnit from '@/components/SpUnit.vue'
import {ref,reactive,computed} from 'vue'
import {useSpStore} from '@/stores/allStore'
import { nanoid } from 'nanoid'
import { i18n } from '@/lang'
let spStore = useSpStore()


// function adds units
// bind the id when created, the position will be the last
function addSpUnit(){
    spStore.spArray.push({component:SpUnit,props:{id:nanoid()}})
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