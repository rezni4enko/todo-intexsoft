import axios from "axios";

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/posts',
})

export const fetchPostsApi = (limit, page) => {
   return instance.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
         _limit: limit,
         _page: page
      }
   }).then(
      response => response)
}

export const fetchTaskPage = (id) => {
   return instance.get(`/${id}`).then(response => response.data)
}

export const fetchTaskComments = (id) => {
   return instance.get(`/${id}/comments`).then(response => response.data)
}
