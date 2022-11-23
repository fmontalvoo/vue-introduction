import { InputComponent } from './input.component.js'
import { InputComponentModel } from './input.component.js'

export default {
    components: {
        InputComponent,
        InputComponentModel
    },
    template: `
    <div class="container">
        <h2>{{text}}</h2>
        <InputComponentModel v-model:value="text" />
        <InputComponent :value="text" @customInput="change" />
    </div>
    `,
    data() {
        return {
            text: 'Hola mundo!!!'
        }
    },
    methods: {
        change(text) {
            this.text = text;
            console.info(this.text);
        }
    }
}
