// importo le dipendenze che mi servono per creare lo store
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

// importo i redusers che andro a creare in seguito
import rootReduser from './redusers/index';

// importo i dati statici per popolare inizialmente lo store
// import comments from './data/comments';
import posts from './data/posts';

console.log(window.devToolsExtension)

// creo un oggetto State contenente i dati statici inseriti manualmente
// questo ci permette di unire i un unico oggetto i due file importati precedentemente
const defaultState = {
    // comments: comments,
    posts: posts
}

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f

// creare lo store di Redux con la dipendenza importata precedentemente
// passando due parametri (redusers, preloadState):
// 1. sono i reduser 
// 2. è l'oggetto defaultStore per popolare con dei dati il nostro store
const store = createStore(rootReduser, defaultState, reduxDevTools);

// creare la storia della navigazione
export const history = syncHistoryWithStore(browserHistory, store);

export default store;