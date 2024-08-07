import blog from './views/blog.js'
import post from './views/post.js'
import tags from './views/tags.js'
import search from './views/search.js'
import error from './views/error.js'
import page from './views/page.js'

/**
 * To add pages:
 * 1. import your page/view/whatever
 * 2. add the hash and page to the routes object
 * 3. profit
 */
const routes = {
  '#blog': blog,
  '#post': post,
  '#tags': tags,
  '#search': search,
  '#error': error,
  '#contact': page,
  '#discography': page,
  '#about': page,
  '#schedule': page
}

/**
 * grab the hash, call the route and stuff it into the dom!
 */
const router = async () => {
  const { hash, params } = await getHash()
  document.querySelector('main').innerHTML = await routes[hash].render(hash, params)
  setActiveNav(hash)
}

/**
 * set the active nav element if it exists
 * @param  {string} hash
 */
const setActiveNav = async (hash) => {
  const nav = document.querySelector(`[href="${hash}"]`)
  if(nav) {
    document.querySelector('.active').classList.remove('active')
    nav.classList.add('active')
  }
}

/**
 * grabs the hash and handles defaults/errors
 * @return {obj}
 */
const getHash = async () => {
  let [hash, params] = await location.hash.split('?')
  params = new URLSearchParams(params) // need this semi!

  if (hash === '' || hash === '/') {
    hash = '#blog'
  }

  if (!routes[hash]) {
    hash = '#error'
  }
  return { hash, params }
}

// and we're listening...
window.addEventListener('hashchange', router)
window.addEventListener('load', router)
window.addEventListener('keyup', e => {
  if (e.keyCode === 27) {
    toggleHamburger() // eslint-disable-line
  }
})
