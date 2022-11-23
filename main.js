import { createApp } from 'vue';

import computedProps from './components/computed-props.js';
import customInputComponent from './components/custom-input.component.js';
import CounterButtonComponent from './components/counter-button.component.js'

const app = createApp(computedProps);

app.mount('#app')