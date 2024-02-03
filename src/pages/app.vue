<template>
  <Header />
  <Body>
    <NotFound v-if="isNotFound" />
    <Content v-else />
  </Body>
</template>

<script setup>
import Header from '@/components/header.vue';
import Body from '@/components/body.vue';
import NotFound from './404.vue';
import { Content, useData } from 'vitepress';
import { computed, inject } from 'vue';
const { page } = useData();
const isNotFound = computed(() => page.value.isNotFound);
const { posts } = inject('test');
console.log('posts is: ', posts);
</script>
