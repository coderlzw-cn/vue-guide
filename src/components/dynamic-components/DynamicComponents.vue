<script setup lang="ts">
import {defineComponent, ref,} from "vue";
import Dynamic1 from "./Dynamic1.vue";
import Dynamic2 from "./Dynamic2.vue";

type VueComponent = ReturnType<typeof defineComponent>;

const tabs: Record<string, VueComponent> = {
  Dynamic1,
  Dynamic2
}

const currentTab = ref<string>("Dynamic1");


</script>

<template>
  <div class="card">
    <a href="https://cn.vuejs.org/guide/essentials/component-basics.html#dynamic-components">
      <h1>动态组件</h1>
    </a>
    <div>
      <button class="button" v-for="(_, tabName) in tabs" :key="tabName"
              @click="currentTab = tabName">{{ tabName }}
      </button>
    </div>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<style scoped>

</style>
