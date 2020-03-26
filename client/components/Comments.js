import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            user: 'user',
            comment: 'comment'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e){
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleComment(e){
        e.preventDefault()
        // recupero delle infomrazioni da passare all'action
        let { postId } = this.props.params
        let author = this.state.user
        let comment = this.state.comment

        this.props.addComment(postId, comment, author)
    }

    handleDelete(e){
        
        let { postId } = this.props.params
        let indexOfComment = e.target.value
        console.log(postId, indexOfComment)

        this.props.deleteComment(postId, indexOfComment)

    }

    render() {

        const Comment = (content, i) =>{
            console.log(content)
            return(
                <div className="comment" >
                    <p>
                        <strong>{content.comment.user}: </strong>
                        {content.comment.text}
                        <button className="remove-comment" value={content.index} onClick={this.handleDelete}>&times;</button>
                    </p>
                </div>
            )
            
        }

        return (
            <div className="comments">
                {this.props.comment.map((comment, i) => (
                    <Comment comment={comment} key={i} index={i}/>
                ))}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleComment}>
                    <input 
                        type="text" 
                        name="user" 
                        defaultValue={this.state.user}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="comment" 
                        defaultValue={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <input type="submit" hidden/>
                </form>
                
            </div>
        )
    }
}
