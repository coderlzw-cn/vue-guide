<script setup lang="ts">
import ClassAndStyle from "./components/ClassAndStyle.vue";
import VforComponent from "./components/VforComponent.vue";
import EventHanding from "./components/EventHanding.vue";
import FormInput from "./components/FormInput.vue";
import Watchers from "./components/Watchers.vue";
import DynamicComponents from "./components/dynamic-components/DynamicComponents.vue";
import ComponentEvent from "./components/conponent-event/ComponentEvent.vue";
import AsyncComponent from "./components/async-component/AsyncComponent.vue";
import ProvideInject from "./components/provide-inject/ProvideInject.vue";
import SlotComponent from "./components/slots/SlotComponent.vue";
import PropsComponent from "./components/props/PropsComponent.vue";
import TeleportComponent from "@/components/TeleportComponent.vue";
import CustomDirectives from "@/components/CustomDirectives.vue";

import tip from "@/common/message";
import {onMounted} from "vue";
import RefAndReactiveComponent from "@/components/RefAndReactiveComponent.vue";
import ThemeComponent from "@/components/toogleTheme/ThemeComponent.vue";

onMounted(() => {
})
import { SpeedInsights } from "@vercel/speed-insights/next"

</script>

<template>
  <speed-insights/>
  <button class="button" @click="  tip({ type: 'warn', str: '我是提示框' }) ">click</button>


  <div class="flex gap-x-4">
    <ref-and-reactive-component/>

    <ClassAndStyle class="grow"/>
  </div>
  <theme-component/>

  <vfor-component>
    <template #title>
      <a href="https://cn.vuejs.org/guide/essentials/list.html"> v-for 循环</a>
    </template>
  </vfor-component>
  <!-- 动态切换主题 -->
  <!-- Props -->
  <Suspense>
    <props-component/>
  </Suspense>
  <EventHanding/>

  <FormInput/>

  <Watchers/>


  <DynamicComponents/>

  <ComponentEvent/>


  <AsyncComponent/>

  <ProvideInject/>

  <slot-component/>

  <teleport-component/>

  <custom-directives/>



</template>

<style scoped>

</style>
