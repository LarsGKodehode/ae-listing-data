import style from './App.module.css'

import * as postAPI from './data/postController'
import { posts } from './data/data'

/**
 * Returns a standarized date format
 */
function getDate(dateString) {
  const unixTime = Date.parse(dateString)
  return new Date(unixTime).toLocaleDateString()
}

/**
 * Locale aware word capitalisation
 */
function capitalize(string) {
  return string.slice(0, 1).toLocaleUpperCase() + string.slice(1)
}

/**
 * Component for displaying post data
 */
function Post({
  title,
  description,
  author,
  createdAt,
  updatedAt,
  className
}) {
  const freshness = getDate(updatedAt ? updatedAt : createdAt)
  const capitalTitle = capitalize(title)

  return (
    <div className={className}>
      <div>
        <h3>{capitalTitle}</h3>
        <br />
        <p>{description}</p>
      </div>
      <div>
        <h6>Author: {author.username}</h6>
        <br />
        <h6>Last edited: {freshness}</h6>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className={`${style.App} standard`}>
      {
        posts.map((post) => <Post className={style.post} key={post.slug} {...post} />)
      }
    </div>
  )
}

export default App
