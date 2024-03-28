<template>
    <el-header height="8%">
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
          <template #title>{{ $t("userInterface.hello") }} Language</template>
          <el-menu-item index="2-1">English</el-menu-item>
          <el-menu-item index="2-2">简体中文</el-menu-item>
          <el-menu-item index="2-3">日本語</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-header>
    <el-main>

      <el-container justify-content="space-between" align-items="stretch">
        <el-row :gutter="25">
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
