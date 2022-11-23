export default {
    data() {
        return {
            text: 'Activo',
            isActive: true,
        };
    },
    template: `
    <div class="container" :class="style">
        <h2>{{ text }}</h2>
        <button @click="isActive = !isActive">{{ label }}</button>
    </div>
    `,
    watch: {
        isActive(value) {
            this.text = value
                ? 'Activo'
                : 'Inactivo';
        },
    },
    computed: {
        label() {
            return this.isActive
                ? 'Desactivar'
                : 'Activar';
        },
        style() {
            return this.isActive ? ['active'] : ['inactive'];
        }
    }
}