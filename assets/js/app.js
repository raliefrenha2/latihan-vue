new Vue({
    el: '#app',
    data: {
        tasks: [
            { description: 'Go to the store', completed: true },
            { description: 'Finish screencast', completed: false },
            { description: 'Make donation', completed: true },
            { description: 'Clear Inbox', completed: false },
            { description: 'Make dinner', completed: false },
            { description: 'Clean room', completed: true },
        ]
    },

    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);

            // this.tasks.filter(function (task) {
            //     return !task.completed;
            // });
        }
    }
})