export default {
    data() {
        return {
            text: 'Hola Mundo',
        };
    },
    template: `
        <div>
            <p>{{text}}</p>
            <input type="text" v-model="text" />
            <br>
            <br>
            <input type="text" :value="text" @input="changeInput"/>
        </div>
    `,
    methods: {
        changeInput(evt) {
            this.text = evt.target.value;
        }
    }
}