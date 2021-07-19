new Vue({
    el:'#app',
    data: {
        user: 'sajal'
    },

    methods: {
        update(){
            setTimeout(()=>{
                this.user = 'sajib'
            },2000)
        }
    },
    
});
