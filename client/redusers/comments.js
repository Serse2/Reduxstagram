// SLICE REDUCER COMPOSITION
// dal reducer comments estrapoliamo solo una parte dello stato che vogliamo aggiornare
// in questo caso non è necessario aggiornare tutti i commenti ma solo quello interessato e restituire tutto lo stato.
function postComments(state = [], action){
    switch(action.type){
        case('ADD_COMMENT'):
            // aggiungi commento
            return [
                // copio lo stato attuale 
                ...state,
                // aggiungo il commento
                {
                    user: action.author,
                    text: action.comment
                }
            ]
        case('DELETE_COMMENT'):
            //elimina commento
            console.log('elimina il commento numero ' + action.index + ' avente per id ' + action.postId)
            console.log(state)
            // verifico id del commento 

            return[
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
                // rimuovo l'oggetto commento togliendolo dall'array con splice

            ]

        default:
            return state
    }
}

function comments(state=[], action){
    if (action.postId !== 'undefined'){
        return {
            // copia tutto lo stato
            ...state,
            // identifico in modo dinamico un determinato id e relativo contenuto
            // passandogli come valore un subReducer in modo da aggiornare solo il singolo array di commenti riferiti all'ID
             //action.postId = BAcyDyQwcXX: 
             //state[action.postId] = [{…}, {…}, {…}, {…}]
            [action.postId]: postComments(state[action.postId], action)
            // al postComments vengono passati il contenuto del post secondo l'id e l'azione da eseguire
        }
    }
}

export default comments;