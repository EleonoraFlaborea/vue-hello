/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log ('Vue on', Vue)

const {createApp} = Vue;

const app = createApp ({
    data(){
        return{
        
            name: 'Eleonora',
            age: 25,
        }
    }

})

app.mount('#root');