import React from 'react'

const Posts = ({posts, loading}) => {

    if(loading){<h2>Loading...</h2>}

  return (
    <ul className='lis-group mb-4' >
    {
        posts.map(post =>(
            <li key={post.id} className='lis-group-item'>
                {post.title}
            </li>

        ))
    }

    </ul>
  )
}

export default Posts

