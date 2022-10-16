import React from "react";
import MainCard from "../Roi/MainCard.js";
import image2 from "./image2.jpg";
import big1 from "./big1.jpg";
import big2 from "./big2.jpg";




const Home = () => {
  return (
    <div>
        <MainCard image={big1} imageText={"big1"} title={"Welcome!"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
        <MainCard image={big2} imageText={"big2"} title={"Our Mission"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
    </div>
  );
};

export default Home;