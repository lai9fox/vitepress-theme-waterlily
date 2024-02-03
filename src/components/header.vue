<template>
  <div class="border-b fixed flex flex-row h-16 items-center left-0 px-16 right-0 top-0">
    <h1 class="text-2xl">{{ site.title }}</h1>
    <span class="flex-1" />
    <div class="flex gap-2 items-center justify-between">
      <div
        v-for="(link, index) in links"
        :key="index"
        class="cursor-pointer flex gap-1 items-center"
        @click="link.click"
      >
        <Icon :name="link.iconName" />
        <span>{{ link.linkName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
import { useData, useRouter } from 'vitepress';
const router = useRouter();
const { site } = useData();
const links = [
  { iconName: 'categories', linkName: '分类', click: () => router.go('categories') },
  { iconName: 'tags', linkName: '标签', click: () => router.go('tags') },
  { iconName: 'archives', linkName: '归档', click: () => router.go('archives') }
];
</script>
