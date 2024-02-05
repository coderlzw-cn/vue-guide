<script setup lang="ts">
import {computed} from "vue";

interface Props {
  width?: number | string;
  height?: number | string;
  name: string,
  prefix?: string,
  fill?: string
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24,
  prefix: '#icon',
  fill: 'none',
  strokeWidth: 1.5,
})

const symbolId = computed(() => `${props.prefix}-${props.name}`)

</script>

<template>
  <svg aria-hidden="true" :width="props.width" :height="props.height">
    <use :xlink:href="symbolId" :fill="props.fill" :stroke-width="strokeWidth"/>
  </svg>
</template>
<style scoped>
svg {
  display: inline-block;
}
</style>
