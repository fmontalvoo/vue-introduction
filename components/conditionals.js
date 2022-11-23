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
        <button @click="isActive = !isActive">
            <p v-if="isActive">Activar</p>
            <p v-else>Desactivar</p>
        </button>
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
        style() {
            return this.isActive ? ['active'] : ['inactive'];
        }
    }
}