import React, { Component } from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


export default class Post extends Component {

    constructor(props){
        super(props)
        this.incrementLikes = this.incrementLikes.bind(this)
    }

    incrementLikes(){
        this.props.addLike(this.props.index)
    }

    render() {
        let { caption, display_src, likes, code } = this.props.post
        let { comments } = this.props
         return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${code}`}>
                        <img src={display_src} alt={caption} className="grid-photo"/>
                    </Link>
                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span className="likes-heart" key={likes}>{likes}</span>
                    </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.incrementLikes} className="likes">&hearts; {likes}</button>
                        <Link className="button" to={`/view/${code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[code] ? comments[code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
}
