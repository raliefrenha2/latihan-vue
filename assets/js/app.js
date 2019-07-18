new Vue({
    el: '#app',
    data: {
        tasks: [
            { description: 'Go to the store', completed: true },
            { description: 'Finish screencast', completed: false },
            { description: 'Make donation', completed: false },
            { description: 'Clear Inbox', completed: false },
            { description: 'Make dinner', completed: false },
            { description: 'Clean room', completed: true },
        ]
    },

    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    }
})