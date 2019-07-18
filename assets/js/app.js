var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        names: ['Joe', 'Mary', 'Jane', 'Jack']
    },
    mounted() {

        document.querySelector('#button').addEventListener('click', () => {
            let name = document.querySelector('#input');

            app.names.push(name.value);


            name.value = '';

        })

    }
});