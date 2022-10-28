export default {
  data() {
    return { count: 0 }
  },
  template: `<button @click="increment">Boton pulsado {{ count }} veces.</button>`,
  methods: {
    increment() {
      this.count++;
    }
  }
}