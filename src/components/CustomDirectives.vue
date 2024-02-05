<script setup lang="ts">
import {DirectiveBinding, ref} from "vue";

const textArr = "海纳百川，有容乃大；壁立千仞，无欲则刚。".split("");
const a = ref<any>([]);
const vAutoInputText = {
  mounted: (el: HTMLDivElement) => {
    let index = 0;
    const timerId = setInterval(() => {
      if (textArr.length === el.innerText.length) {
        clearInterval(timerId);
        return;
      }
      el.innerText += textArr[index]
      index++;
    }, 500)
  }
}

const vAutoInputTextFormValue = {
  mounted: (el: HTMLDivElement, binding: DirectiveBinding) => {
    const {value} = binding;
    let index = 0;
    const textArr = value.split("");
    const timerId = setInterval(() => {
      if (textArr.length === el.innerText.length) {
        clearInterval(timerId);
        return;
      }
      el.innerText += textArr[index]
      index++;
    }, 500)
  }
}

const add = () => {
  const a: any = 10;
  console.log(a.join())
}
</script>

<template>
  <div v-auto-input-text/>
  <div v-auto-input-text-form-value="'志不强者智不达，言不信者行不果。'"/>
</template>

<style scoped>

</style>
