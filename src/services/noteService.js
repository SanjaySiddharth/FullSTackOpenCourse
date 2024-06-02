import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// this is the short version of :
// const getAll = () => {
//  const request = axios.get(baseUrl)
//  return request.then(response => {
//    return response.data
//  })
// }

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
    getAll,
    create,
    update
}
/*
  Since the keys have the same name as the object methods we can use above method
  Definition: key: value  
  getAll: getAll, 
  create: create, 
  update: update 
  */
 