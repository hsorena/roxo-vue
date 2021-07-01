Vue.component('cmp' , {
    data:function () {
        return{
            status:'good'
        }
    }
    ,
    template: '<p>Server state : {{ status }}'
})

new Vue({
    el:'#app'
})