import '@/styles/main.css';
import App from './src/pages/app.vue';
import 'virtual:svg-icons-register';

export default function configGenerator(path) {
  return {
    Layout: App,
    enhanceApp({ app }) {
      app.provide('test', { posts: path });
    },
  };
}

