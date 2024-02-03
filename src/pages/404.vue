<template>
  <div class="flex flex-col gap-8 h-full items-center justify-center">
    <div class="font-semibold indent-4 text-8xl tracking-[1rem]">404</div>
    <div class="flex font gap-8 items-center text-xl">
      <span
        v-for="button, index in buttons"
        :key="index"
        class="border cursor-pointer hover:bg-slate-200 px-6 py-2 rounded-xl"
        @click="button.click"
      >
        {{ button.text }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useData } from 'vitepress';
const { site } = useData();
const router = useRouter();
const buttons = [
  { text: '返回', click: () => router.go('/') },
  { text: '首页', click: () => router.go(site.value.base) }
];
</script>
