<script setup lang="ts">
import {computed, ref} from "vue";
import PropsComponentItem from "./PropsComponentItem.vue";

const data = (await import("@/data/sayings.json")).default;

const randomData = data[Math.floor(Math.random() * data.length)];

const text = ref(randomData.content);
const showStyle = ref(true)


/**
 * 随机输出一句名言，如果输出的是当前显示的名言，则重新调用此函数
 */
function outputOneText() {
  const index = Math.floor(Math.random() * data.length);
  const content = data[index].content;
  if (content !== text.value) return content;
  return outputOneText();
}

// 当前时间
const currentTime = computed(() => new Date().toLocaleString());

</script>

<template>
  <div class="card">
    <div>
      <svg-icon name="link" width="18" height="18" :fill="'#ffffff'"/>
      Props 传参
    </div>
    <div class="space-x-5 mb-4 mt-4">
      <button class="button" @click="text = outputOneText()">随机输出一条名言</button>
      <button class="button" @click="showStyle=!showStyle">是否显示样式【 {{ showStyle }} 】</button>
    </div>

    <props-component-item :text="text" :list="data" :current-time="currentTime" :is-show-style="showStyle" show-style/>

  </div>
</template>

<style scoped>

</style>
