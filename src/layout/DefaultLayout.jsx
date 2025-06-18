// react imports

import { Outlet } from "react-router-dom";

// components import

import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout (){ 
return(
<>
<Header />

<main>
<Outlet></Outlet>
</main>

<Footer />
</>)}