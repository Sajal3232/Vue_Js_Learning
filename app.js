const app = new Vue({
    el:'#app',
    data: {
        value: "1st",
    },

    methods: {
        insta(){ 
            app1.value = 'sajal';
        }
    },
});

const app1 = new Vue({
    el:'#app1',
    data: {
        value: "2st",
    },
    
});


