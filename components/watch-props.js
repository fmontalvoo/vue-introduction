export default {
    data() {
        return {
            text: 'Hola mundo!!!',
        };
    },
    template: `
        <div>
            <input type="text" v-model="text" />
            <p>{{text}}</p>
        </div>
    `,
    watch: {
        text(newValue, oldValue) {
            console.info(`Watching(text) -> new: ${newValue} | old: ${oldValue}`);
        },
    }
}