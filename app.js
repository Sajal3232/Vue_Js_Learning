new Vue({
    el:'#app',
    data: {
        title : "sajal",
        cars : ['toyota','BMW','Alion'],
        object: {
            name : 'sajal',
            age: '26'
        },
        greeting: (a,b)=>{
                s =a+b;
            return s;
        }
    }
});
