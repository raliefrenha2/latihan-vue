new Vue({
    el: '#app',
    data: {
        message: 'Vue Computed',
        int1: 2,
        int2: 3

    },
    computed: {
        sum: function () {
            return this.int1 + this.int2
        }
    }
})