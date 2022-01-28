import { useMemo } from "react"

export const useSortedTask = (todo, sort) => {
   const sortedListTask = useMemo(() => {
      if (sort) {
         return [...todo].sort((a, b) => a[sort].localeCompare(b[sort]))
      }
      return todo
   }, [sort, todo])

   return sortedListTask
}

export const useTask = (query, todo, sort) => {
   const sortedListTask = useSortedTask(todo, sort)
   const sortedAndSearchedListTask = useMemo(() => {

      return sortedListTask.filter(value => value.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
         value.body.includes(query.toLocaleLowerCase()))
   }, [query, sortedListTask])

   return sortedAndSearchedListTask
}
