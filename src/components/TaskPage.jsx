import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTaskPage, fetchTaskComments } from "../api/todoApi";
import { useFetching } from "../hooks/useFetching";
import CircularProgress from '@mui/material/CircularProgress';

const TaskPage = () => {

   const [taskPage, setTaskPage] = useState({})
   const [taskComments, setTaskComments] = useState([])

   const params = useParams()
   useEffect(() => {
      getTaskPage()
      getTaskComments()
   }, [])


   const [getTaskPage, isLoadingPosts] = useFetching(async () => {
      const response = await fetchTaskPage(params.id)
      setTaskPage(response)
   })

   const [getTaskComments, isLoadingComments] = useFetching(async () => {
      const response = await fetchTaskComments(params.id)
      setTaskComments(response)
   })

   return <div>
      {isLoadingPosts
         ? <CircularProgress />
         : <>
            <div>{taskPage.id}</div>
            <div>{taskPage.title}</div>
            <div>{taskPage.body}</div>
         </>}
      {isLoadingComments
         ? <CircularProgress />
         : taskComments.map((comment) =>
            <div style={{ margin: 15 }} key={comment.id}>
               <div>{comment.id}</div>
               <div>{comment.name}</div>
               <div>{comment.email}</div>
            </div>
         )}
   </div >
}

export default TaskPage