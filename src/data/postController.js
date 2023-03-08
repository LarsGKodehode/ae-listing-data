import { posts } from "./data";

function getRandomNumber(min, max) {
  return ((Math.random() * (max - min)) + min)
}

function request(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() > .5) {
          resolve(callback())
        } else {
          reject({ statusCode: 404 })
        }
      },
      getRandomNumber(500, 5000)
    )
  })
}

/**
 * Returns all posts
 */
export function getPosts() {
  return request(
    () => posts
  )
}

/**
 * Returns a post with ID
*/
export function getPost(id) {
  return request(
    () => resolve(posts.find((post) => post.id === id))
  )
}

/**
 * Returns all post by userID
*/
export function getPostByUser(userId) {
  return request(
    () => resolve(posts.filter((post) => post.userId === userId))
  )
}