/* 

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. 

*/



const app = new Vue({


    el: '#root',

    data: {
    },

    methods: { 
    },

    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(myResp => {
            console.log(myResp);
            this.emails.push(myResp.data.response)}).catch(e => {console.error(e, "OPS!"); this.error = e})
    }

})


