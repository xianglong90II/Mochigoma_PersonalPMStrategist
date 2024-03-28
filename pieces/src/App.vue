<template>
    <el-header height="6%">
          <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="1">My day</el-menu-item>
        <el-menu-item index="2" disabled>Main plan</el-menu-item>
        <div class="flex-grow"></div>
        <el-sub-menu index="3">
          <template #title>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
</svg>
            </template>
          <el-menu-item index="2-1">English</el-menu-item>
          <el-menu-item index="2-2">简体中文</el-menu-item>
          <el-menu-item index="2-3">日本語</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-header>
    <el-main>
      <el-container style="
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          min-width: 1000px;
      "
       >
        <el-row :gutter="20">
          <el-col :span="7">
            <SpActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="7">
            <WkActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="7">
            <ObjActivities class="grid-content ep-bg-purple"/>
          </el-col>
          <el-col :span="3">
            <CreditResult />
          </el-col>
        </el-row>
      </el-container>
    </el-main>
    <el-footer height="8%">
    </el-footer>

</template>

<script setup lang="ts">
import SpActivities from './components/SpActivities.vue'
import WkActivities from './components/WkActivities.vue'
import ObjActivities from './components/ObjActivities.vue'
import creditResult from './components/CreditResult.vue';
import { i18n } from './lang';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const {locale} = useI18n()

//dealing with routing
const activeIndex = ref('1')
const handleSelect = async (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key == "2-1"){//en
    locale.value = 'en'
    // i18n.global.locale = "en"
  }else if (key=="2-2"){//zh
    locale.value = 'zh'
    // i18n.global.locale = "zh"
  }
  else if (key == '2-3'){//ja
    locale.value = 'ja'
    // i18n.global.locale = "ja"
  }
}
</script>

<style scoped>
el-main {
  padding: 0;
  background-color: #FCFCFC;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.flex-grow {
  flex-grow: 1;
}
</style>
