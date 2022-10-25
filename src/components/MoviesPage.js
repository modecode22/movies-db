import React , {useEffect , useState} from 'react'
import Movies from "./Movies";
import PaginateSection from './PaginateSection';
import { useSelector , useDispatch } from 'react-redux';
import { getAllMovie } from './../redux/action/moviesActions';
function MoviesPage({  getPage, pageCount }) {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllMovie());
    }, []);

    const dataMovies = useSelector((state) => state.movies);
    useEffect(() => {
      setMovies(dataMovies);
    }, [dataMovies]);
  return (
    <div className="flex items-center justify-evenly flex-wrap mt-5 h-full w-full gap-5">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })
      ) : (
        <h1>لا يوجد أفلام لعرضها</h1>
      )}
      <PaginateSection getPage={getPage} pageCount ={pageCount}/>
    </div>
  );
}

export default MoviesPage;
