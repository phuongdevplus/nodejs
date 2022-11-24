import axios from 'axios'

const URL = 'http://localhost:3000'

export const fetchData = () => axios.get(`${URL}/me/stored/courses/data`)