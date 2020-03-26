import React, { Component } from 'react'

import Post from './Post'

export default class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">
                {
                    this.props.posts.map((post, index) => (
                        <Post {...this.props} key={index} index={index} post={post}/>
                    ))
                }
            </div>
        )
    }
}