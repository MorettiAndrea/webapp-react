import { Outlet } from "react-router-dom";
import Header from "../components/layout components/header";
import Footer from "../components/layout components/footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
