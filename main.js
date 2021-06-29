
new Vue({
    el:"#root",
    data:{
        link:'http://www.google.com',
        linkTitle:'Google',
        attachRed:false,
        color:"green",
        width:100,
        bgColor:'pink'
    }
    ,
    methods:{
        //old version
        oldChangeLink:function () {
            this.link = 'http://www.soft98.ir'
            this.linkTitle = 'Soft98'
        }
        ,
        //new version
        changeLink(){
            this.link = 'http://www.soft98.ir'
            this.linkTitle = 'Soft98'
        }
    }
    ,
    computed:{
        divClasses(){
            return{
                red: this.attachRed ,
                blue: !this.attachRed
            }
        }
        ,
        divStyles(){
            return{
                backgroundColor : this.bgColor,
                width: this.width + 'px'
            }
        }
    }
})
