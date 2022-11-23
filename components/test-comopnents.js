import CounterButtonComponent from './counter-button.component.js'

export default {
    components: {
        CounterButtonComponent,
    },
    template: `
    <div class="container">
        <CounterButtonComponent :counter="0" />
        <CounterButtonComponent :counter="10" />
    </div>
    `,
}
