// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";


// data import
import paths from "./data/paths";

// layout elements import
import DefaultLayout from "./layout/defaultLayout";

// pages import
import Homepage from "./pages/Homepage";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MoviesDetails";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout />}>
          <Route path={paths.homePage} element={<Homepage />} />
          <Route path={paths.moviesList} element={<MovieList />} />
          <Route path={paths.moviesDetails} element={<MovieDetail />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}