document.addEventListener('DOMContentLoaded', async function(){
    let text = await axios.get("templates/test.html");
    const data = {
        message: "Hello vue.js",
        products: [
            {
                name: "Футболки",
                count: 1,
                color: "#fff",
                price: 20,
                preOrder: false,
                delivery: false
            }
        ]
    }
    const CardTemplate = {
        props: ['product'],
        template:  text.data,
        methods:{ }
    }
    const app = {
        data() { return data },
        components: {
            'card': CardTemplate 
        },
        methods: {  }
    }
    Vue.createApp(app).mount('#app')
})