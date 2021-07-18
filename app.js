new Vue({
    el:'#app',
    data: {
        user: "sajal",
        userAge: 3,
        allowedAge: 19
    },

    methods: {
        userInfo(){
           return this.user === "sajal" ? true : false;
        }
    },
    
});
