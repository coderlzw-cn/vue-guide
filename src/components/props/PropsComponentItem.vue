<script setup lang="ts">
import {data} from "./defaultProps.ts"
import {ref, watch} from "vue";


interface Props {
  currentTime: string
  text: string,
  list: Array<any>,
  optionalText?: string,
  optionalList?: Array<any>,
  isShowStyle?: boolean,
  showStyle?: boolean
}


const props = withDefaults(defineProps<Props>(), {
  optionalText: "读书破万卷，下笔如有神。",
  optionalList: () => data.default.filter(({id}) => id % 2 === 0),
  isShowStyle: false,
  showStyle: true
})

const randomKey = ref(Math.random().toString());

// 监听props中具体某个值的变化
watch(() => props.text, () => {
  randomKey.value = Math.random().toString()
})


</script>

<template>
  <div class="flex gap-x-4">
    <div class="card-item">
      <Transition name="text">
        <p :key="randomKey" class="truncate flex mb-4">
          <span>今日名言：</span>
          <span>{{ props.text }}</span>
          <span class="text-right grow">{{ props.currentTime }}</span>
        </p>
      </Transition>

      <p v-for="({id, content},index) in props.list" :key="id" class="p-2"
         :class="(index%2==0 && isShowStyle)?'bg-slate-100':''">
        <span>{{ id }}、</span>
        <span>{{ content }}</span>
      </p>
    </div>
    <div class="card-item">
      <p class="mb-4">
        <span>今日名言：</span>
        <span>{{ props.optionalText }}</span>
      </p>

      <p v-for="({id, content}, index) in  props.optionalList" :key="id" class="p-2 ma"
         :class="(index%2===0 && showStyle)?'bg-slate-100':''"
      >
        <span>{{ id }}、</span>
        <span>{{ content }}</span>
      </p>
    </div>

  </div>
</template>

<style scoped>
/* 过度的关键帧 */
.text-enter-active,
.text-leave-active {
  transition: opacity 2s ease, width 2s ease;
}

/* 元素的最终状态 */
.text-enter-to {
  width: 100%;
}

/* 元素进入之前、离开之后的状态 */
.text-enter-from,
.text-leave-to {
  width: 0;
  height: 0;
  opacity: 0;
  margin-bottom: 0;
}


</style>
