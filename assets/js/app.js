var app = new Vue({
    el: '#app',
    data: {
        isButtonDisabled: false
    },

    methods: {
        disabledButton() {
            this.isButtonDisabled = true;
        }
    }



});