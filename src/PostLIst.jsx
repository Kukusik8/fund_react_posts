import React from 'react'
import PostItem from './components/PostItem'
import { TransitionGroup,CSSTransition } from 'react-transition-group'

const PostLIst = ({ posts,title,remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign:'center'}}>
          No posts yet!
      </h1>
    )
  }

  return (
      <div>
          <h1 style={{ textAlign: "center" }}
          >{title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            className="post"
          >
          <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
      
    </div>
  )
}

export default PostLIst