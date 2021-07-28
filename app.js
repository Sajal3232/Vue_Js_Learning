tmp =`<p>this is my {{ name }}</p>`;

const app1 = new Vue({
    data: {
        name: "sajal"
    },
    template: tmp,
    
});

setTimeout(() => {
    app1.$mount('#app');
}, 2000);

