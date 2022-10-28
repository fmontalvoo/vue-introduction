import { createApp } from 'vue';

import customInputComponent from './components/custom-input.component.js';
import CounterButtonComponent from './components/counter-button.component.js'

const app = createApp(customInputComponent);

app.mount('#app')