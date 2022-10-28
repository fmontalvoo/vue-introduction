export default {
    data() {
      return { count: 0 }
    },
    template: `<button v-on:click="count++">Boton pulsado {{ count }} veces.</button>`
  }