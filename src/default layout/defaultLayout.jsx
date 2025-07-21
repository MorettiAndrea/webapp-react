import { Outlet } from "react-router-dom";
import Header from "../components/layout components/header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
