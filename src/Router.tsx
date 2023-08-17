import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Animals from "./components/Animals";
import Animal from "./components/Animal";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/animals",
        element: <Animals></Animals>
    }, 
    {
        path: "/animal/:id",
        element: <Animal></Animal>
    }
]);