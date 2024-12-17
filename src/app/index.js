import { createApp } from 'vue';  // Usamos createApp en Vue 3
import App from './component/App.vue';

createApp(App).mount('#app');  // Montamos la app en el elemento con id 'app'

console.log('Vue app mounted!');