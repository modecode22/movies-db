import { ALL_MOVIE } from "../type-s/moviesTypes"

const initialValue = {movies: [], pageCount: 0}
export const moviesReducer = (state=initialValue , action)=>{
  switch(action.type) {
        case ALL_MOVIE:
          return{movies : action.data , pageCount : action.pages}
          default:
          return state;
}}
