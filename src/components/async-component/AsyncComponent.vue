<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import LoadingComponent from "@/common/LoadingComponent.vue";

const AsyncCompDemo1 = defineAsyncComponent(() => {
  return import("./AsyncComponentDemo1.vue")
})

const AsyncCompDemo2 = defineAsyncComponent(({
  // 加载函数
  loader: async () => {
    await new Promise(resolve => setTimeout(resolve, 6000))
    return import("./AsyncComponentDemo2.vue");
  },
  // 加载时的loading组件
  loadingComponent:LoadingComponent ,
  // loadingComponent: {
  //   template: "<div>异步组建即将显示...</div>"
  // },
  //
  // 展示加载组建前的延迟，默认200ms
  delay: 3000,
  //
  // errorComponent: {
  //   template: "<div>加载失败</div>"
  // },

  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 1000_0000,

  // 默认值为true，，如果为false，表明不受 suspense 影响
  // suspensible: true
}))


</script>

<template>
  <div class="card">
    <a href="https://cn.vuejs.org/guide/components/async.html">
      <h1>异步组件</h1>
    </a>
    <!-- 不配合 Suspense 单独使用异步组件 -->
    <div>
      <async-comp-demo1/>
      <async-comp-demo2/>
    </div>

    <!-- 配合 Suspense 使用异步组件 -->
    <Suspense>
      <!-- 在异步组件加载时展示的 loading 状态 -->
      <template #fallback>Loading...</template>
      <!-- 需要展示的异步组件，当前会等待所有异步操作都完成后，展示组件 -->
      <div>
        <AsyncCompDemo1/>
        <AsyncCompDemo2/>
      </div>
    </Suspense>

    <!-- 配合 Suspense 使用异步组件 -->
    <AsyncCompDemo1/>
    <Suspense>
      <!-- 在异步组件加载时展示的 loading 状态 -->
      <template #fallback>Loading...</template>
      <!-- 需要展示的异步组件，当前会等待所有异步操作都完成后，展示组件 -->
      <AsyncCompDemo2/>
    </Suspense>
  </div>
</template>

<style scoped>

</style>
