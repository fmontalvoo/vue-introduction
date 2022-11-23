export default {
  props:{
    counter: Number
  },
  data(){
    return { count: this.counter }
  },
  template: `<button @click="increment">Boton pulsado {{ count }} veces.</button>`,
  methods: {
    increment() {
      this.count++;
    }
  }
}