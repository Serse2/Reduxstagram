import React from 'react'

import {render} from 'react-dom'

//import component of react-router
import { Router, Route, IndexRoute } from 'react-router'
//import style
import './styles/style.styl'

import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import SinglePhoto from './components/SinglePhoto'

// importo il componente Provider che conterrà il nostro store contenente il nostro stato al più alto livello
// infatti verrà inserito in router funzione e racchiuderà tutti gli altri elementi
import { Provider } from 'react-redux'
// per contenere lo store è necessario passarglielo come proprietà, lo store l'abbiamo creato nel file in directory e si chiama store.js
// importiamo sia lo store (che contiene il nostro stato) sia lo storico di navigazione ovvero history (che importeremo all'interno delle {})
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={SinglePhoto}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))