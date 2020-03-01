// this is aliased in webpack config based on server/client build
import axios from 'axios'
import _ from 'lodash'
function fetch (child) {
	var prefix = 'http://tiaoque.com:1337/' 
	var fullPath = prefix + child
	// console.log(fullPath)
  return new Promise((resolve, reject) => {
    let response = axios.get(fullPath).then((response) => {
      // console.log('responseData:', response.data)
      resolve(response.data)
    }).catch((e) => {
      reject(e)
    })
  })
}

let path = 'posts'

// fetch data by types
export function fetchIdsByType (type) {
  return fetch(`${path}/?type=${type}`)
}


export function fetchItem (id) {
  if (_.isObject(id)) {
    id = id.id
  }
  return fetch(`${path}/${id}`)
}

export function fetchItems (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchUser (id) {
  return fetch(`user/${id}`)
}

export function watchList (type, cb) {
  let first = true
}
