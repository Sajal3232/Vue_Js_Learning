new Vue({
    el:'#app',
    data: {
            name:'sajal',
            x: 0,
            y: 0
    }, 

    methods: {
        userInfo(){
           this.name = "sajib" ;
        },

        divLand(event){
            this.x = event.clientX;
            this.y = event.clientY;

        }
    },
    
});
