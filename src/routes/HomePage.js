import Button from '@mui/material/Button'
import React from "react";

import { Outlet, Link } from "react-router-dom";
import Home from "../Components/HomePage/Home.js";

// import  NavBar  from "../NavBar"
export default function HomePage(props){
    return (<>
   <Home/>
    </>);
}