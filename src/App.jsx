// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";


// data import
import paths from "./data/paths";

// layout elements import
import DefaultLayout from "./layout/defaultLayout";

// pages import
import Homepage from "./pages/Homepage";
import { MoviesListPage } from "./pages/MoviesListPage";
import MoviesDetailPage from "./pages/MoviesDetails"
import AboutPage from "./pages/aboutPage";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout />}>
          <Route path={paths.Homepage}>
          <Route index element={<Homepage />} />
          <Route path={paths.AboutPage} element={<AboutPage />} />
          </Route>
          <Route path={paths.MoviesListPage}>
          <Route index element={<MoviesListPage />} />
          <Route path={paths.MoviesDetailsPage} element={<MoviesDetailPage />} />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}