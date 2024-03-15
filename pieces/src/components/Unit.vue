<template>
    <div class="unit">
        <div class="score">{{ scoreVal }}</div>
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
          <div class="firstTitle">{{ attr1Title }}</div>
          <div class="secondTitle">{{ attr2Title }}</div>
          <div class="firstAdjust">
            <el-rate
              v-model="attrValue1"
              :max="3"
              :icons="icons"
              :void-icon="Help"
              :low-threshold="1"
              :high-threshold="3"
              :void-color="unitColor"
              :colors="[unitColor,unitColor,unitColor]"
            />
          </div>
          <div class="secondAdjust">
            <el-rate
              v-model="attrValue2"
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
        <img class="unitFrame" src="../assets/unitFrame.svg" oncontextmenu="return false;" draggable="false" alt="">
    </div>
</template>

<script setup lang="ts" name="Unit">
// a single pieces unit
import{computed, ref}from 'vue'
import { Help,HelpFilled } from '@element-plus/icons-vue'
//determine unit types and colors
let unitColor:string
let attr1Title:string
let attr2Title:string
let unitType = 'working'
if (unitType == 'working'){
  unitColor = '#5667FF'
  attr1Title = 'Productivity'
  attr2Title = 'Duriation'
}else{
  unitColor = '#FF4949'
  attr1Title = 'Difficulty'
  attr2Title = 'Volume'
}

const titleInput = ref('')

let attrValue1 = ref(0)
let attrValue2 = ref(0)
let scoreVal = computed(()=>{return attrValue1.value*attrValue2.value})



const icons = [HelpFilled,HelpFilled,HelpFilled]
</script>

<style scoped>

.unit {
  position: relative;
  width: 190px;
  height: 150px;
}
.score {
  position: absolute;
  top: 10px;
  margin-left: 4%;
  width: 95%;
  height: 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
}

.unitTitle {
  position: absolute;
  left: 10%;
  top: 32%;
  width: 155px;
  height: 20px;
  z-index: 4;
}
input {
  border-style: none; 
  transition: border-color 0.3s ease; 
}


.adjustables {
  position: absolute;
  left: 12%;
  top: 55%;
  width: 155.71px;
  height: 45.21px;
}

.firstTitle{
  position: absolute;
  left: -5%;
  top: 0px;
  width: 88.47px;
  height: 17.71px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}

.secondTitle {
  position: absolute;
  left: -5%;
  top: 25.37px;
  width: 78.66px;
  height: 12.13px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}

.firstAdjust {
  position: absolute;
  left: 55%;
  top: -17%;
  width: 40%;
  z-index: 5;
}

.secondAdjust {
  position: absolute;
  left: 55%;
  top: 40%;
  width: 10%;
  z-index: 6;
}

.unitFrame {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 190px;
  height: 150px;
  background-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(100,100,100,0.5);
}
</style>