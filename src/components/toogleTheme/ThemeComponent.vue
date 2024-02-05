<script setup lang="ts">
import {computed, nextTick, onMounted, ref} from "vue";
import ThemeComponentDemo1 from "@/components/toogleTheme/ThemeComponentDemo1.vue";

const domRef = ref();
const theme = ref<'light' | 'dark'>('light')

// 获取当前系统的主题
onMounted(() => {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  theme.value = darkQuery.matches ? 'dark' : 'light'
})

const toggleTheme = async (event: MouseEvent) => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  await nextTick();
  const x = event.offsetX; // 获取鼠标点击的x坐标，当前元素左上角为原点   event.clientX;
  const y = event.offsetY; // 获取鼠标点击的y坐标，当前元素左上角为原点   event.clientY;
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));  // 获取鼠标点击位置到屏幕边缘的最大距离
  const rootDom = domRef.value as HTMLDivElement;
  let isDark: boolean = theme.value === 'dark';
  /**
   * 1. 通过document.startViewTransition()方法，我们可以在视图切换时，获取到一个Transition对象
   */

      // @ts-ignore
  const transition = document.startViewTransition(() => {
        // isDark = rootDom.classList.contains('dark')  // 判断是否是黑色主题
        // rootDom.classList.remove(isDark ? 'dark' : 'light')
        // rootDom.classList.add(isDark ? 'light' : 'dark')
      })
  /**
   * 2. 在视图切换完成后，执行一些操作
   */
  transition.ready.then(() => {
    document.documentElement.animate(
        {
          // circle 表示一个圆形区域，半径，圆心坐标
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 1000,
          easing: 'ease-in',
          pseudoElement: '::view-transition-new(theme-transition)',
        }
    )
  })
}


const iconFill = computed(() => theme.value === 'light' ? '#e5e7eb' : '#fff')
const iconButtonFlex = computed(() => theme.value === 'light' ? 'justify-end' : 'justify-start')
</script>

<template>
  <div class="card theme-container" ref="domRef" :class="theme">
    <div class="toggle-button rounded-6" :class="iconButtonFlex" @click="toggleTheme">
      <svg-icon name="light" v-if="theme==='light'" :fill="iconFill" width="24" height="24"/>
      <svg-icon name="dark" v-else :fill="iconFill" width="24" height="24"/>
    </div>
    <theme-component-demo1/>
  </div>
</template>

<style scoped>

/* 深色主题 */
.dark {
  --bg-color: #000;
  --text-color: #fff;
  --border-color: #374151;
}

/* 浅色主题 */
.light {
  --bg-color: #fff;
  --text-color: #000;
  --border-color: #e5e7eb;
}


.theme-container {
  background-color: var(--bg-color);
  view-transition-name: theme-transition;
}

.toggle-button {
  cursor: pointer;
  display: flex;
  width: 70px;
  border-width: 1px;
  border-style: solid;
  background-color: var(--bg-color);
  border-color: var(--border-color);
}


</style>
