import React, { Component } from 'react'
import Post from './Post'
class Posts extends Component
{
    render()
    {
        
        return(
            <div className='posts' > 
                {this.props.posts.map(element =>
                    {
                        return(
                            <Post title={element.title} content={element.content}></Post>
                        )
                    })}
            </div>
        )
    }
    componentDidMount()
    {
        
    }
}
export default Posts