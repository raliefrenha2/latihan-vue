var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        newName: '',
        names: ['Joe', 'Mary', 'Jane', 'Jack']
    },

    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = '';

        }
    },

});