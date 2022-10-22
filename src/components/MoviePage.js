import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  const [theOne, setTheOne] = useState([]);
  const params = useParams();

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US
  //get the movie details by id
  const getAllMoviesById = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US`
    );
    setTheOne(res.data);
        console.log(res.data.release_date);

  };
  useEffect(() => {
    getAllMoviesById();
  }, []);

  
    console.log(theOne.title);
    console.log(theOne.overview);
    console.log(theOne.homepage);
    console.log(theOne.backdrop_path);
  return (
    <div className="p-5 h-full">
      <div className="flex flex-row min-w-full">
        <div className="rounded-md overflow-hidden cursor-pointer group relative flex h-56 w-40 hover:">
          <img
            src={`https://image.tmdb.org/t/p/w500` + theOne.backdrop_path}
            className="duration-500 object-cover group-hover:blur-sm"
            alt=""
          />
          <div className="translate-y-52 group-hover:translate-y-11 duration-500 z-10 absolute text-white p-5">
            <h1 className="text-2xl font-bold">{theOne.title}</h1>
            <h2 className="text-xl font-bold">{theOne.release_date}</h2>
          </div>
        </div>
        <div className="px-5 flex flex-col justify-start">
          <h1 className="font-bold">{theOne.title}</h1>
          <h2>{theOne.release_date}</h2>
        </div>
      </div>
      <div className="w-full flex mt-5 justify-center flex-col">
        <h1 className="font-black">paragraph</h1>
        <p>{theOne.overview}</p>
      </div>
      <div className="mt-5 w-full flex justify-evenly items-center">
        <Link to="/">
          <button className="h-7 rounded-xl p-2 bg-slate-600 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 duration-300">
            main page
          </button>
        </Link>
        <button className="h-7 rounded-xl p-2 bg-slate-600 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 duration-300">
          <a href={theOne.homepage}>the site</a>
        </button>
      </div>
    </div>
  );
}

export default MoviePage;
