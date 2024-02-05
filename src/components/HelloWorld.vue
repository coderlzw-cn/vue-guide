<script setup lang="ts">
import {computed, ref} from 'vue'


interface RefState {
  count: number;
  name: string;
  age: number;
  friends: Array<string>;
}


const refState = ref<RefState>({
  count: 0,
  name: '张三',
  age: 18,
  friends: ['李四', '王五']
})


const refStateFriend = computed(() => {
  const name = refState.value.name
  return name === '张三' ? refState.value.friends[0] : refState.value.friends[1]
})


const changeCount = async (num: number) => {
  console.log(num)
  // const buttonDom = document.querySelector('h1') as HTMLDivElement;
  // let {count} = $ref(refState)
  //
  // count = num;
  // console.log("dom更新前", buttonDom.innerHTML, count)
  // await nextTick()
  // console.log("dom更新完毕", buttonDom.innerHTML, count)
}


const changeName = (random: number) => {
  refState.value.name = random > 0.5 ? '张三' : '小明'
}

</script>

<template>
  <div>
    <div>
      <slot name="title">默认标题</slot>
    </div>

    <div class="space-y-3 m-t border-1 rounded-md border-solid border-[#ecebebff] p-4 text-nowrap shadow-md">
      <h1>{{ refState.count }}</h1>

      <div class="card">
        <button type="button" @click="refState.count++">count is {{ refState.count }}</button>
      </div>


      <time datetime="">
        Last updated: {{ new Date().toLocaleString() }}
      </time>
      <button class="mybutton" v-on:click="changeCount(1)">changeCount</button>

      <h3>{{ refState.name }} 的朋友是 {{ refStateFriend }}</h3>
      <button @click="changeName(Math.random())">change name {{ refState.name }}</button>
    </div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
