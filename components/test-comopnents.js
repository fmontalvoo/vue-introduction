import HeaderComponent from './header.component.js'
import CounterButtonComponent from './counter-button.component.js'

export default {
    components: {
        HeaderComponent,
        CounterButtonComponent,
    },
    template: `
    <div class="container">
        <HeaderComponent>
            <h2>Prueba de components</h2>
        </HeaderComponent>
        <CounterButtonComponent :counter="0" />
        <CounterButtonComponent :counter="10" />
    </div>
    `,
}
