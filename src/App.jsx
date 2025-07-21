import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import paths from "./data/paths";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import DefaultLayout from "./default layout/defaultLayout";
import AboutUs from "./pages/AboutUsPage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={paths.homePage} element={<Homepage />} />
            <Route path={paths.aboutPage} element={<AboutUs />} />
            <Route path={paths.moviesPage} element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
