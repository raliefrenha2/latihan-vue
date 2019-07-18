new Vue({
    el: '#app',
    data: {
        message: 'Vue Computed',
        int1: 2,
        int2: 3,
        result: null
    },
    computed: {
        sum: function () {
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumProcess: function () {
            return this.result = this.int1 + this.int2;
        }
    }
})