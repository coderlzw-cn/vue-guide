<script setup lang="ts">

const eventHandle = (event: Event) => {
  const target = event.target as HTMLButtonElement
  const targetText = target.innerText
  const targetName = target.nodeName
  console.log(`targetText: ${targetText}, targetName: ${targetName}`)
}

const printRandomNumber = (random: number) => {
  const randomInt = Math.floor(random * 100)
  console.log(randomInt)
}

</script>

<template>
  <div class="card v-middle">
    <button class="button" v-on:click="eventHandle">event 事件处理器</button>
    <button class="button" v-on:click="printRandomNumber(Math.random())">输出1-100的随机参数</button>
  </div>
</template>

<style scoped>

</style>
