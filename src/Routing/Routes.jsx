import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout";
import Login from "../Pages/Authen/Login";
import Register from "../Pages/Authen/Register";

 export let myMap= createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            { 
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
        ]

    }
])