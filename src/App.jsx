// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";


// data import
import paths from "./data/paths";

// layout elements import
import DefaultLayout from "./layout/defaultLayout";

// pages import
import HomePage from "./pages/HomePage";
import SearchedMoviePage from "./pages/SearchedMoviePage";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout />}>
          <Route path={paths.homePage()} element={<HomePage />} />
          <Route path={paths.SearchedMoviePage()} element={<SearchedMoviePage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}