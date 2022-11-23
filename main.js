import { createApp } from 'vue';

import forLoop from './components/for-loop.js';
import watchProps from './components/watch-props.js';
import conditionals from './components/conditionals.js';
import computedProps from './components/computed-props.js';
import customInputComponent from './components/custom-input.component.js';
import CounterButtonComponent from './components/counter-button.component.js'

const app = createApp(forLoop);

app.mount('#app')