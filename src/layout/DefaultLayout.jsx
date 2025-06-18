// react imports

import { Outlet } from "react-router-dom";

// components import

import Header from "../compontents/layout-components/Header";
import Footer from "../compontents/layout-components/Footer";

export default function DefaultLayout (){ 
return(
<>
<Header />

<main>
<Outlet></Outlet>
</main>

<Footer />
</>)}