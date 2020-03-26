//Questo è il componente appena sopra Main al quale si deve connettere le azioni 

// importo bindActionCreators
// trasforma un oggetto i cui valori sono le azioni create, nel nostro caso sono racchiuse in actionCrators e le 
// combina una da una all'inderno di un dispach chiamata, in modo che possano essere richiamate singolarmente
import { bindActionCreators } from 'redux'
//bindActionCreators accetta due parametri:
// 1. sono le azioni in questo caso actionCreators.js
// 2. dispach
import * as actionsCreators  from '../actions/actionCrators'

//importo la funzione connect, questa funzione permette la connessione tra un componente React e il Redux Store
import { connect } from 'react-redux'

import Main from './Main'

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch)
}

//creiamo il componente da inserire appena sopra a Main 
// utiliziziamo la funzione connect per unire un componente React (Main) con lo store creato di Redux
// mapStateToProps contiene lo stato (posts e comments)
// mapDeisptchToProps contiene tutte le actcion usufruibili tramite la chiamata a dispatch
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App