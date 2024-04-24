<template>
    <div class="personalStatus">
        <div class="title1">{{ $t("userInterface.physicalStatus") }}</div>
        <el-rate class="rate1"
              v-model="physicalStatus"
              :max="3"
              :icons="icons"
              :void-icon="Help"
              :low-threshold="1"
              :high-threshold="3"
              :void-color="unitColor"
              :colors="[unitColor,unitColor,unitColor]"
            />
            <div class="title2">{{ $t("userInterface.emotionalStatus") }}</div>
            <el-rate class="rate2"
                  v-model="emotionalStatus"
                  :max="3"
                  :icons="icons"
                  :void-icon="Help"
                  :low-threshold="1"
                  :high-threshold="3"
                  :void-color="unitColor"
                  :colors="[unitColor,unitColor,unitColor]"
                />
    </div>
</template>

<script setup lang="ts" name="PersonalStatus">
import {ref} from 'vue'
import { Help,HelpFilled } from '@element-plus/icons-vue'
import {useSpStore} from '@/stores/allStore'
//create nessesary variables
const icons = [HelpFilled,HelpFilled,HelpFilled]
let unitColor = "#5AFF75"
let emotionalStatus = ref(0)
let physicalStatus = ref(0)
//dealing with pinia
let spStore = useSpStore()
spStore.personalStatus.emoStat = emotionalStatus
spStore.personalStatus.physicalStat = physicalStatus


</script>

<style scoped>
.personalStatus {
  position: relative;
  width: 250px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #2e2e2e;
}
.dark .personalStatus{
  color: #ebebeb;
}
.title1 {
  position: absolute;
  left: 16px;
  top: 12px;
  width: 143px;
  height: 25px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
}
.dark .title1{
  color: #ebebeb;
}
.title2 {
  position: absolute;
  left: 16px;
  top: 34px;
  width: 148px;
  height: 36.4px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
}
.dark .title2{
  color: #ebebeb;
}
.rate1 {
  position: absolute;
  left: 175px;
  top: 13px;
  width: 52.7px;
  height: 14px;
}
.rate2 {
  position: absolute;
  left: 175px;
  top: 38px;
  width: 52.7px;
  height: 14px;
}
</style>