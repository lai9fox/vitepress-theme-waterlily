import { useData } from 'vitepress';

export default function useSiteData() {
  return useData().site;
}
