import { useData } from 'vitepress';

export default function usePageData() {
  return useData().page;
}
