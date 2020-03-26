import React, { Component } from 'react';
import Post from './Post'
import Comments from './Comments'

export default class SinglePhoto extends Component {
    render() {
        // recupero postId da URL
        let { postId } = this.props.params

        // PER IL COMPONENTE POST
        // trovare l'index del post corrispondende a quello cliccato dalla griglia
        // per farlo bisogna verificare il code attributo dell'elenco dei posts che sia uguale
        // al parametro indicato dall'URL con la voce postId
        let indexPostCorrente = this.props.posts.findIndex((post) => post.code === postId);

        // recuperare i dati del post corrispondente 
        // prendere elenco dei posts indicando come posizione [indexPostCorrente]
        // facendo questo ottenimo i valori del post che abbiamo cliccato
        let postCorrente = this.props.posts[indexPostCorrente];
        console.log(indexPostCorrente, postCorrente) //prova questo console.log per verificare

        // adiamo a riutilizzare il componente Post passandogli vari dati
        // 1. post, contenente tutte proprietà del singolo post scelto
        // 2. index, contenente l'index del post scelto (molto importatè perchè serve per incrementare i like essendo un parametro per l'action 'ADD_LIKE', così facendo sarà possibile incrementare i like anche dal singolo post)
        // 3. ...this.props, contenente tutte le altre props comprese le funzioni che inescano le action - inoltre al componente Post servono i dati relativi ai commenti 
        // --------------------------------------------
        // PER IL COMPONENTE COMMENTS
        // dall'elenco di tutti i commenti inserisco come indice il postId recuperato dall'URL
        // nel caso in cui non ci siano dei commenti settare il valore ad un array vuoto
        let commentsPostCorrente = this.props.comments[postId] || []
        // console.log(commentsPostCorrente) // prova questo conole.log per verificare

        return (
            <div className="single-photo">
                <Post post={postCorrente} index={indexPostCorrente} {...this.props}/>
                <Comments comment={commentsPostCorrente} {...this.props}/>
            </div>
        )
    }
}