Vue.component('task-list', {
    template: `<div>
                    <task v-for="task in tasks">{{ task.task}}</task>
                </div>`,

    data() {
        return {
            tasks: [
                { task: 'Pai ka Pasa', complete: true },
                { task: 'Pai ka mall', complete: false },
                { task: 'Pai ka Apotik', complete: true },
                { task: 'Pai Karajo', complete: false }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});


new Vue({
    el: '#app',

})