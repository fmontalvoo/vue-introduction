export const InputComponent = {
    props: {
        value: String
    },
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
    template: `<input type="text" :value="value" @input="customInput" />`,
    methods: {
        removeItem() {
            this.$emit('removeItem', this.item);
        }
    },
    methods: {
        customInput(event) {
            this.$emit('update:value', event.target.value);
        }
    }
}