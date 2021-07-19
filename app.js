new Vue({
    el:'#app',
    data: {
        cars: ["BMW","TOYOTA","ALION"],
        user: {
            name:'sajal',
            age: 26
        }
    }, //for index ,value

    methods: {
        userInfo(){
           return this.user === "sajal" ? true : false;
        }
    },
    
});
