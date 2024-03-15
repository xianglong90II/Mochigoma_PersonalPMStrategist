<template>
    <div class="availableBar">
        <span class="title">sdefghty</span>
        <span class="counter">0/5</span>
    </div>
</template>

<script setup lang="ts" name="AvailableBar">

</script>

<style scoped>
.availableBar{
    position: relative;
    width: 275px;
    height: 45px;
    border: #2e2e2e 1px solid;
    border-radius: 15px;
}
.counter {
  position: absolute;
  left: 201.41px;
  top: 0px;
  width: 68.75px;
  height: 45px;
  color: #5667ff;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
}
.title {
  position: absolute;
  left: 14.52px;
  top: 10.53px;
  width: 188px;
  height: 24.2px;
  color: #2e2e2e;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
}

</style>