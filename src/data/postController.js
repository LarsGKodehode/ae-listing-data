import { posts } from "./data";

/**
 * Generate a number between min and max
 */
function getRandomNumber(min, max) {
  return ((Math.random() * (max - min)) + min)
}

/**
 * Wrapper for mimicking a fetch request to a remote API
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
 * Returns the posts with title matching the filter , or 404 if no posts found
*/
export function filterByTitle(filter) {
  return request(
    () => resolve(posts.find((post) => post.title.includes(filter)) || { statusCode: 404 })
  )
}

/**
 * Returns posts with author mathcing the filter, or 404 if no posts found
*/
export function filterPostsByAuthor(authorName) {
  return request(
    () => resolve(posts.filter((post) => post.author.username.includes(authorName)) || { statusCode: 404 })
  )
}