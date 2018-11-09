import React, { Component } from 'react'
import '../css/post.css'
class Post extends Component
{
    render()
    {
        return(
            <div className='post'>
               <p className='post-title'>{this.props.title}</p>
               <p className='post-content'>{this.props.content}</p>
            </div>
        )
    }
}
export default Post