<template>
    <div class="unitSummary">
        <div class="title" v-if="unitType=='support'">{{$t("userInterface.supportActivities")}}</div>
        <div class="title" v-if="unitType=='working'">{{$t("userInterface.workingActivities")}}</div>
        <div class="title" v-if="unitType=='objectives'">{{$t("userInterface.objectives")}}</div>
        <div class="line"></div>
        <span class="pointTitle" v-if="unitType=='support'">{{ $t("userInterface.conentrationGained")}}</span>
        <span class="pointTitle" v-if="unitType=='working'">{{ $t("userInterface.totalManhourPts")}}</span>
        <span class="pointTitle" v-if="unitType=='objectives'">{{ $t("userInterface.totalFunctionPts")}}</span>
        <span class="summaryPts" :style="{color:unitColor}">{{ ptsData }}</span>
    </div>
</template>

<script setup lang="ts" name="UnitSummary">
import { i18n } from '@/lang/index';

//locale realtimely
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

let props = defineProps(['unitType','ptsData'])

//determine color and title
let unitColor:string
let unitType = props.unitType

if (unitType == 'support'){
  unitColor = '#5AFF75' 
}
else if (unitType == 'working'){
  unitColor = '#5667FF'
}
else{
  unitColor = '#FF4949'
}



</script>

<style scoped>
.unitSummary{
  position: relative;
  width: 300px;
  height: 80px;
}

.title {
  position: absolute;
  left: 0px;
  top: -5px;
  width: 300px;
  height: 50.29px;
  text-shadow: 0px 2px 4px rgba(100,100,100,0.5);
  color: #2e2e2e;
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 38.73px;
}
.line{
    position: absolute;
    top: 35px;
    width: 290px;
    height: 2px;
    background-color: #C2C2C2;
}
.pointTitle{
  position: absolute;
  left: 0px;
  top: 42.32px;
  width: 241.73px;
  height: 33.6px;
  text-shadow: 0px 2px 4px rgba(100,100,100,0.5);
  transform: rotate(-0.082470536deg);
  color: #2e2e2e;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 18.15px;
}
.summaryPts{
  position: absolute;
  left: 222px;
  top: 38px;
  width: 78px;
  height: 34px;
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}

</style>