<template>
    <div>
        <UnitSummary :unitType="'objectives'" :ptsData="objStore.getFunctionPoints"/>
        <el-scrollbar height="350px">
            <Unit v-for="i in objStore.objArray" :unitType="'objectives'"/>
        </el-scrollbar>

        
        <div class="btn">
            <el-button @click="addObjUnit" color="#FF4949" :icon="Plus" style="width: 100%; height: 100%;" circle />
        </div>
        <AvailableBar :unitType="'objectives'" :barTitle="'userInterface.manhourAvailable'"
        :valMin="objStore.getManhourAvailableLeft" :valMax="objStore.getManhourAvailableMax"/>
    </div>
</template>

<script setup lang="ts" name="ObjActivities">
import Unit from '@/components/Unit.vue'
import UnitSummary from './UnitSummary.vue'
import {Plus} from '@element-plus/icons-vue'
import AvailableBar from './AvailableBar.vue'
import { useObjStore } from '@/stores/allStore'
import { i18n } from '@/lang'
import { watch } from 'vue'
let objStore = useObjStore()
//add unit function
function addObjUnit(){
    objStore.objArray.push(Unit)
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