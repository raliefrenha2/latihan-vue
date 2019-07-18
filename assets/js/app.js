var app = new Vue({
    el: '#app',
    data: {
        isLoading: false
    },

    methods: {
        toggleClass() {
            this.isLoading = true;
        }
    }



});