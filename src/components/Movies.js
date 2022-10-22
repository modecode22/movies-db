import React from 'react'
import { Link } from 'react-router-dom';
function Movies({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="">
        <div className="rounded-md overflow-hidden cursor-pointer group relative flex h-56 w-40 hover:">
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
            className="duration-500 object-cover group-hover:blur-sm"
            alt=""
          />
          <div className="translate-y-52 group-hover:translate-y-11 duration-500 z-10 absolute text-white p-5">
            <h1 className="text-2xl font-bold">{movie.original_title}</h1>
            <h2 className="text-xl font-bold">{movie.release_date}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movies;
