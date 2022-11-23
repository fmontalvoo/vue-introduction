export default {
    props: {
        item: {
            default: { id: 0, name: '' }
        },
    },
    template: `
        <li @click="removeItem">
            {{item.name}}
        </li>
    `,
    methods: {
        removeItem() {
            this.$emit('removeItem', this.item);
        }
    }
}