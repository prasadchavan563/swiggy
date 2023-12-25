import React,{lazy} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";

import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */ 
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { Suspense } from "react";

const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <>
      <MainHeader.Header />
      <Outlet />
      <MainFooter />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurant/:id",
        element : <Restaurant />
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h1>Loading ...</h1>}><Grocery /></Suspense> //Suspense is used for till the grocery page load show fallback
      }
    ],
    errorElement : <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);