new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    },

    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    }
})