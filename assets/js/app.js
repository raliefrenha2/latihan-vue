Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    }
})