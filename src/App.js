
import './App.css';
import  React ,{useEffect ,useState} from 'react';
import NavBar from './components/NavBar';
import MoviesPage from "./components/MoviesPage";
import axios from 'axios';
import MoviePage from "./components/MoviePage";
import {BrowserRouter , Route,Routes} from "react-router-dom"


function App() {

  const [movies, setMovies] = useState([]); 
  const [pageCount, setPageCount] = useState(0);
  //https:jsonplaceholder.typicode.com/photos
const getAllMovies = async()=>{
  const res = await axios.get(
    " https://api.themoviedb.org/3/movie/popular?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US"
  );
setMovies(res.data.results);
setPageCount(res.data.total_pages);
}


// get carrent movies page
const getPage = async (page) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US&page=${page}`
  );
  setMovies(res.data.results);
  setPageCount(res.data.total_pages);
};

useEffect(() => {
getAllMovies();
  }, []);



  // to search in api 
const search = async(word)=>{
  if(word === ""){
    getAllMovies()
  }else{
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=e033c5dcbcc295ea36ff41b6e172aca5&query=${word}&language=en-US&page=1&include_adult=false`
        );
        setMovies(res.data.results);
        setPageCount(res.data.total_pages);
  }
}
  return (
    <div className="relative flex bg-slate-100  flex-col justify-start  min-h-screen min-w-screen">
      <NavBar search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MoviesPage
                pageCount={pageCount}
                movies={movies}
                getPage={getPage}
              />
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
