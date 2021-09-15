require('./bootstrap');

import { createApp } from 'vue'
import HelloWorld from "./components/HelloWorld";

const app = createApp(HelloWorld);
app.mount('#app');
