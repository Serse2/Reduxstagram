// in questo file andremo a unire tutti i vari reducer creati per ogni stato 

// importo la dipendenza che mi serve 
// in questo caso è combineReducers dal packege da Redux
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// importo i due reducer creati 
import comments from './comments'
import posts from './posts'


// unisco in un solo oggetto i reducer creati precedentemente 
// con il metodo combineReducers messo a disposizione da Redux 
// aggiungendo lo storico di navigazione con reouterReducer

const rootReducer = combineReducers({
    posts: posts, 
    comments: comments,
    routing: routerReducer
});

export default rootReducer