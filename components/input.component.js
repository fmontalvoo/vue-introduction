export const InputComponent = {
    props: {
        value: String
    },
    inject: ['valor'],
    template: `<input type="text" :value="value" @input="customInput" />`,
    methods: {
        removeItem() {
            this.$emit('removeItem', this.item);
        }
    },
    methods: {
        customInput(event) {
            this.$emit('customInput', event.target.value);
        }
    }
}

export const InputComponentModel = {
    props: {
        value: String
    },
    inject: ['valor'],
    template: `<input type="text" :value="value" @input="customInput" />`,
    methods: {
        removeItem() {
            this.$emit('removeItem', this.item);
        }
    },
    methods: {
        customInput(event) {
            console.info(this.valor);
            this.$emit('update:value', event.target.value);
        }
    }
}