<template>
  <span class="box-border inline-block p-0.5 text-base">
    <svg aria-hidden="true" width="1em" height="1em">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </span>
</template>

<script setup>
import { svgIconSymbolIdPrefix } from '@/const/svg-icons';
import { computed } from 'vue';
const props = defineProps({
  /**
   * svg 图标名称，assets/svgs
   * eg:
   * - assets/svgs/search.svg => search
   * - assets/svgs/header/tags.svg => header-tags
   * - assets/svgs/header/links/github => header-links-github
   */
  name: { type: String, required: true },
  /**
   * 图标颜色, 默认黑色
   */
  color: { type: String, default: 'black' },
});
const symbolId = computed(() => `#${ svgIconSymbolIdPrefix }-${ props.name }`);
</script>
