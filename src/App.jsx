import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import paths from "./data/paths";
import MovieDetailPage from "./pages/MovieDetailPage";
import DefaultLayout from "./default layout/defaultLayout";
export default function App() {
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={paths.homePage} element={<Homepage />} />
          <Route path={paths.aboutPage} element={<Homepage />} />
          <Route path={paths.moviesPage} element={<Homepage />} />
          <Route path="movies:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ;
  </>;
}
