import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.86:3000/'
})

export default api

//json-server --watch --host 192.168.0.86 db.json
