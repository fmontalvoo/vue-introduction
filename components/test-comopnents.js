import ItemComponent from './item.component.js'
import HeaderComponent from './header.component.js'
import CounterButtonComponent from './counter-button.component.js'

export default {
    components: {
        ItemComponent,
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

        <ul>
            <ItemComponent 
                v-for="(item, index) in items"
                v-bind:key="item.id"
                v-bind:item="item"
                v-on:removeItem="remove"
            />
        </ul>
    </div>
    `,
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'Item#1'
                },
                {
                    id: 2,
                    name: 'Item#2'
                },
                {
                    id: 3,
                    name: 'Item#3'
                },
            ],
        }
    },
    methods: {
        remove({ id, name }) {
            console.log(id, name);
            this.items = this.items.filter((el, i) => el.id !== id);
        }
    }
}
