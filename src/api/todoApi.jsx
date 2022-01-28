import axios from "axios";

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/posts',
})

export const fetchPosts = () => {
   return instance.get('https://jsonplaceholder.typicode.com/posts').then(
      response => response.data)
}
