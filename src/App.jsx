import style from './App.module.css'

import * as postAPI from './data/postController'
import { posts } from './data/data'

function Post({
  userId,
  id,
  title,
  body,
  className
}) {
  return (
    <div className={className}>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
      <div>
        <h6>User: {userId} <span>Post: {id}</span></h6>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className={`${style.App} standard`}>
      {
        posts.slice(0, 5).map((post) => <Post className={style.post} {...post} />)
      }
    </div>
  )
}

export default App
