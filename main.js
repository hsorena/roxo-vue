
var vm1 = new Vue({
    el:"#app1",
    data:{
        title : 'The vueJs instance',
        showParagraph:false
    },
    methods:{
        show(){
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
        },
        updateTilte(title){
            this.title = title;
        }
    },
    computed:{
        lowerCaseTitle(){
            return this.title.toLowerCase();
        }
    },
    watch:{
        title(value){
            alert('Title changed, new value : ' + value);
        }
    }

})

setTimeout(function () {
    vm1.title = 'Title changed by timer'
},10000)

vm1.newProperty = 'new property'
console.log(vm1)

var vm2 = new Vue({
    el:'#app2',
    data: {
        secondTitle:'The second title from vm2'
    },
    methods: {
        changeTitle(){
            vm1.title = 'Title Changed from vm2'
        }
    }
})