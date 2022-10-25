import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllMovie, getMovieSearch } from "./../redux/action/moviesActions";
function NavBar() {
    const onSearch = (word) => {
      search(word);
    };

      const dispatch = useDispatch();

  // to search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie())
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <div className="flex bg-slate-800 h-12 justify-evenly items-center  w-full">
      <div className="flex gap-3">
        <input
          type="text"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
          className="h-7 w-80 rounded-xl p-2 bg-slate-600 text-white"
        />
        <button className="h-7 rounded-xl p-2 bg-slate-600 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 duration-300">
          بحث
        </button>
      </div>
      <h1 className=" text-white font-black">Movies Db</h1>
    </div>
  );
}

export default NavBar
