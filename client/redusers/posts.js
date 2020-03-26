// i reducer hanno bisogno di 2 columnRuleStyle: 
// 1. le azioni per aggiornare lo stato globale
// 2. una copia dello stato corrente
// ---------------------------------------------
// NON Modificare lo stato direttamente!! le funzioni reducer sono definite pure
// cioè devono copiare i dati dello stato 
// modificare quella copia
// restituire la copia dello stato aggiornato
// ---------------------------------------------
// CREARE IL REDUSER
// 1. creare funzione
// 2. passare come parametro lo stato settato come un empty array
// 3. passare come secondo parametro le azioni

function posts(state = [], action){
    // verifica che l'azione sia ADD_LIKE
    switch(action.type) { //passo nello switch il tipo di azione che è stata innescata dal click (ADD_LIKE)
        case 'ADD_LIKE' :
            console.log('add like')
            // in questo caso deve tornare un array perchè il nostro intero stato è un array
            return [    //ritornare un array perchè il nostro stato è fatto di un array di oggetti
                ...state.slice(0, action.index), //copio tutti gli oggetti prima dell'oggetto da modificare
                {...state[action.index], likes: state[action.index].likes + 10}, // inserisco un oggetto, copio tutti i valori all'interno dell'oggetto da modificare e vado ad indicare quale proprietà voglio modificare in questo cato like
                ...state.slice(action.index + 1) //copio tutti gli oggetti dopo dell'oggetto da modificare
            ]

        default:
            return state
    }
}

export default posts;

// quello che penso io:
// il reduce prende lo stato e l'azione, all'interno tramite l'azione si andrà a aggiornare lo stato e il valore
// ritornato sarà lo stato aggionato il quale si andrà ad aggioranre nello store 