// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";


// data import
import paths from "./data/paths";

// layout elements import
import DefaultLayout from "./layout/defaultLayout";

// pages import
import MovieList from "./pages/HomePage";
import MovieDetail from "./pages/MoviesDetails";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout />}>
          <Route path={paths.homePage()} element={<MovieList />} />
          <Route path={paths.MoviesDetails()} element={<MovieDetail />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}