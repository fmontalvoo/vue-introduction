export default {
    data() {
        return {
            name: 'Fulano',
            lastname: 'Detal',
            now: new Date(),
        };
    },
    template: `
        <div>
           <p>{{fullName}}</p>
           <p>{{today}}</p>
        </div>
    `,
    computed: {
        today(){
            return this.now.toLocaleDateString();
        },
        fullName() {
            return `${this.name} ${this.lastname}`;
        },
    },
}