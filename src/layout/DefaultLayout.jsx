// react imports

import { Outlet } from "react-router-dom";

// components import

import Header from "../compontents/Header";
import Footer from "../compontents/Footer";

export default function DefaultLayout (){ 
return(
<>
<Header />

<main>
<Outlet></Outlet>
</main>

<Footer />
</>)}