<template>
    <div class="unit">
        <div class="unitTitle">
          <input type="text" v-model="titleInput"
            style="width: 90%;
            color: #2e2e2e;
            height: 100%;  
            border-style: none; 
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;"
            placeholder="Unit Title Here">
        </div>
        <div class="adjustables">
          <div class="subtitle1">{{ val1Title }}</div>
          <div class="subtitle2">{{ val2Title }}</div>
          <div class="subtitle3">{{ val3Title }}</div>
          <div class="rate1">
            <el-rate
              v-model="valValue1"
              :max="3"
              :icons="icons"
              :void-icon="Help"
              :low-threshold="1"
              :high-threshold="3"
              :void-color="unitColor"
              :colors="[unitColor,unitColor,unitColor]"
            />
          </div>
          <div class="rate2">
            <el-rate
              v-model="valValue2"
              :max="3"
              :icons="physicalAttrIcons"
              :void-icon="Help"
              :low-threshold="2"
              :high-threshold="4"
              :void-color="unitColor"
              :colors="[unitColor,unitColor,unitColor]"
            />
          </div>
          <div class="rate3">
            <el-rate
              v-model="valValue3"
              :max="3"
              :icons="icons"
              :void-icon="Help"
              :low-threshold="1"
              :high-threshold="3"
              :void-color="unitColor"
              :colors="[unitColor,unitColor,unitColor]"
            />
          </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="SpUnit">
// a single pieces unit
import{computed, onMounted, ref}from 'vue'
import { Help,HelpFilled,ArrowUpBold,SemiSelect,ArrowDownBold} from '@element-plus/icons-vue'


import {useSpStore} from '../stores/allStore'
let spStore = useSpStore()

//determine unit types and colors
let unitColor:string
let val1Title:string
let val2Title:string
let val3Title:string
let unitType = 'support'
unitColor = '#5AFF75'
val1Title = 'Emotion plus:'
val2Title = 'Physical ↓/↑:'
val3Title = 'Time cost:'
//create variable for rating
let valValue1 = ref(0)
let valValue2 = ref(0)
let valValue3 = ref(0)
//create variable for title
const titleInput = ref('')


let scoreVal = computed(()=>{return valValue1.value*valValue2.value})
//preparing icons for UI
const icons = [HelpFilled,HelpFilled,HelpFilled]
const physicalAttrIcons ={1:ArrowDownBold,3:{value:SemiSelect,excluded:true},4:ArrowUpBold}



//Object exposing variables
let exObj = {
  title:titleInput,
  val1:valValue1,
  val2:valValue2,
  val3:valValue3
}
//store to pinia when mounted
onMounted(()=>{
  spStore.spObjArray.push(exObj)
})

</script>

<style scoped>

.unit {
  position: relative;
  width: 190px;
  height: 140px;
  border: #2e2e2e solid 1px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(100,100,100,0.5);
}

.unitTitle {
  position: absolute;
  left: 16.3px;
  top: 12.33px;
  width: 155.82px;
  height: 18.47px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  z-index: 6;
}
input {
  border-style: none; 
  transition: border-color 0.3s ease; 
}


.adjustables {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 190px;
  height: 140px;
}

.subtitle1{
  position: absolute;
  left: 16.17px;
  top: 45.67px;
  width: 99px;
  height: 15.7px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}

.subtitle2 {
  position: absolute;
  left: 16px;
  top: 74px;
  width: 99px;
  height: 11px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}

.subtitle3 {
  position: absolute;
  left: 15.87px;
  top: 103.11px;
  width: 72.61px;
  height: 15.7px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}

.rate1 {
  position: absolute;
  left: 118.82px;
  top: 46.46px;
  width: 55.59px;
  height: 15px;
}

.rate2 {
  position: absolute;
  left: 119px;
  top: 74.74px;
  width: 55px;
  height: 15.26px;
}

.rate3 {
  position: absolute;
  left: 118.82px;
  top: 104.88px;
  width: 55.59px;
  height: 15px;
}


</style>