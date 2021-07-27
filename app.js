new Vue({
    el:'#app',
    data: {
            name:'sajal',
    }, 

    methods: {
        userInfo(newname,event){
           this.name = newname ;
           console.log(event);
        },

        usersubmit(){
            console.log('success');
         },
    },

    },
    
});
