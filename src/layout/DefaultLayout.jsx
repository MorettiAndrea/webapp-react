// react imports

import { Outlet } from "react-router-dom";

// components import

import Header from "../components/layout-components/Header";
import Footer from "../components/layout-components/Footer";

export default function DefaultLayout (){ 
return(
<>
<Header />

<main>
<Outlet></Outlet>
</main>

<Footer />
</>)}