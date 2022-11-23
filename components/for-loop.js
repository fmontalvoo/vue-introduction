export default {
    data() {
        return {
            list: [
                {
                    title: 'Titulo #1',
                    description: 'Descripcion #1',
                },
                {
                    title: 'Titulo #2',
                    description: 'Descripcion #2',
                },
                {
                    title: 'Titulo #3',
                    description: 'Descripcion #3',
                },
            ]
        };
    },
    template: `
    <div class="container">
       <div v-for="(item, i) in list" :key="i">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
       </div>
    </div>
    `,
}