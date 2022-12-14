import { createApp } from 'vue';

import ForLoop from './components/for-loop.js';
import WatchProps from './components/watch-props.js';
import Conditionals from './components/conditionals.js';
import ComputedProps from './components/computed-props.js';
import TestComponents from './components/test-comopnents.js';
import TestComponentsUno from './components/test-comopnents1.js';
import CustomInputComponent from './components/custom-input.js';
import CounterButtonComponent from './components/counter-button.js'

const app = createApp(TestComponentsUno);

app.mount('#app');