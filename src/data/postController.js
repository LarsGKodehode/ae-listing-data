import { posts } from "./data";

/**
 * Generate a number between min and max
 */
function getRandomNumber(min, max) {
  return ((Math.random() * (max - min)) + min)
}

/**
 * Wrapper for mimicing a fetch to a remote API
 */
function request(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        // Mimic failure chance
        if (Math.random() > 0.1) {
          resolve(callback())
        } else {
          reject({ statusCode: 500 })
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
 * Returns the post with ID or 404 if no post found
*/
export function getPost(id) {
  return request(
    () => resolve(posts.find((post) => post.id === id) || { statusCode: 404 })
  )
}

/**
 * Returns all post by userID, or 404 if no user or no post by user
*/
export function getPostByUser(userId) {
  return request(
    () => resolve(posts.filter((post) => post.userId === userId) || { statusCode: 404 })
  )
}