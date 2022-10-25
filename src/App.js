
import './App.css';
import  React  from 'react';
import NavBar from './components/NavBar';
import MoviesPage from "./components/MoviesPage";
import MoviePage from "./components/MoviePage";
import {BrowserRouter , Route,Routes} from "react-router-dom"
function App() {



//* this is the way to do it (without using redux) )
//   const getAllMovies = async()=>{
//   const res = await axios.get(
//     " https://api.themoviedb.org/3/movie/popular?api_key=e033c5dcbcc295ea36ff41b6e172aca5&language=en-US"
//   );
// setMovies(res.data.results);
// setPageCount(res.data.total_pages);
// }







  return (
    <div className="relative flex bg-slate-100  flex-col justify-start  min-h-screen min-w-screen">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<MoviesPage />}/>
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
