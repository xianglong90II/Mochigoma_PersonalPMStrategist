<template>
    <div class="box">
        <div class="frame">
            <div class="title1">Efficiency</div>
            <div class="val1" :style="{color:colorAccordingScore(20,40,parseInt(creditStore.getEfficiency))}">{{ creditStore.getEfficiency }}</div>
            <div class="title2">Feasability</div>
            <div class="val2" :style="{color:colorAccordingScore(20,40,parseInt(creditStore.getFeasibility))}">{{ creditStore.getFeasibility }}</div>
            <div class="title3">Satisfaction</div>
            <div class="val3" :style="{color:colorAccordingScore(20,40,parseInt(creditStore.getSatisfaction))}">{{ creditStore.getSatisfaction }}</div>
        </div>
    </div>
</template>

<script setup lang="ts" name="CreditResult">
import { useCreditStore } from '@/stores/allStore';
let creditStore = useCreditStore()

// return 1 color in 3 colors according to the score
function colorAccordingScore(below:number,over:number,val:number){
    if (val<below){
        return '#FF4949'
    }else if(val>=below&&val<over){
        return '#5667FF'
    }else{
        return '#40FF5F'
    }
}

</script>

<style scoped>
.box{
    margin:0px auto;
    width: 7.5rem;
}
.frame {
  position: relative;
  top: 8rem;
  width: 100%;
  height: 278px;
  border-radius: 15px;
  border: 1px solid #2e2e2e;
}

.title1 {
  position: absolute;
  top: 19px;
  width: 100%;
  height: 30px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.title2 {
  position: absolute;
  top: 98px;
  width: 100%;
  height: 30px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.title3 {
  position: absolute;
  top: 177px;
  width: 100%;
  height: 31px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.val1 {
  position: absolute;
  width: 100%;
  top: 50px;
  height: 44px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 400;
  line-height: 44px;
  text-align: center;
}
.val2 {
  position: absolute;
  left: 0px;
  top: 130px;
  width: 100%;
  height: 44px;
  color: #578fff;
  font-family: Inter;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}
.val3 {
  position: absolute;
  left: 0px;
  top: 210px;
  width: 100%;
  height: 44px;
  color: #ff4949;
  font-family: Inter;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}


</style>