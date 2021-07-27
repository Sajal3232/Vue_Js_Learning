new Vue({
    el:'#app',
    data: {
        formData:{
            firstName: '',
            lastName: ''
        },
    },

    methods: {
        
        userInfo(){
            console.log(this.formData);
         },
    },

    },
    
});
