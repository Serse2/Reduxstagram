// In questo file specifichiamo le azioni che vogliamo effettuare per modificare lo stato globale
// le azioni vengono specificate mediante una funzione che ritornerà un oggetto
//-----------------------------------------------------------------
// questo oggetto conterrà una serie di infomrazioni:
// 1. il type di azione che vogliamo andare a fontVariantEastAsian: 
// 2. tutte le altre proprietà di cui abbiamo bisogno (payloads)
//-----------------------------------------------------------------
// incremento likes
// per incrementare uno specifico like ho bisogno del suo valore chiave ovvero index
export function addLike(index) {
    return {
      type: 'ADD_LIKE',
      index: index
    }
  }
// Aggiungi commento
// per commentare ho bisogno del valore chiave per localizzare il post, il commento da fare e l'autore del commento
// quindi i parametri passati alla funzione saranno:
// 1. postId
// 2. comment
// 3. author
export function addComment(postId, comment, author){
    return {
        type: 'ADD_COMMENT',
        postId: postId, 
        comment: comment, 
        author: author
    }
}
// Cancella commento
// per eliminare il commento ho bisogno del valore chiave per localizzare il post e l'indice del del commento
// quindi i parametri passati alla funzione saranno:
// 1. postId
// 2. index
export function deleteComment(postId, index){
    return {
        type: 'DELETE_COMMENT',
        postId: postId,
        index: index
    }
}