import { ALL_MOVIE, ALL_PAGES } from "../type-s/moviesTypes";
import axios from "axios"


//
export const getAllMovie =  ()=>{

  return async(dispatch)=>{
     const res = await axios.get(ALL_PAGES);
     console.log(res.data)
     dispatch({ type: ALL_MOVIE, data: res.data.results , pages: res.data.total_pages })
}
  }



  export const getMovieSearch = (word) => {
    return async (dispatch) => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e033c5dcbcc295ea36ff41b6e172aca5&query=${word}&language=en-US&page=1&include_adult=false`
      );
      console.log(res.data);
      dispatch({
        type: ALL_MOVIE,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    };
  };



    export const getMoviePage = (page) => {
      return async (dispatch) => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US&page=${page}`
        );
        console.log(res.data);
        dispatch({
          type: ALL_MOVIE,
          data: res.data.results,
          pages: res.data.total_pages,
        });
      };
    };
