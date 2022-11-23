import { createApp } from 'vue';

import watchProps from './components/watch-props.js';
import conditionals from './components/conditionals.js';
import computedProps from './components/computed-props.js';
import customInputComponent from './components/custom-input.component.js';
import CounterButtonComponent from './components/counter-button.component.js'

const app = createApp(conditionals);

app.mount('#app')