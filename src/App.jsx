import style from './App.module.css'

import * as postAPI from './data/postController'
import { posts } from './data/data'

function Post({
  title,
  description,
  author,
  createdAt,
  updatedAt,
  className
}) {
  const lastEdit = Date.parse(updatedAt ? updatedAt : createdAt)
  const freshness = new Date(lastEdit).toLocaleDateString()

  return (
    <div className={className}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <h4>{author.username}</h4>
        <h4>{freshness}</h4>
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
