new Vue({
    el:'#app',
    data: {
        a : 0,
        b: 0,
        salary:10
    },

    computed: {
        addtoA(){
            console.log("A");
            return this.a + this.salary;
        },
        addtoB(){
            console.log("B");
            return this.b + this.salary;
        }

    },
    
});
