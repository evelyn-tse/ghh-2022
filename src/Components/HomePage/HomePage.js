import React from "react";
import MainCard from "../Roi/MainCard.js";
import image2 from "../Roi/image2.jpeg";

const HomePage = () => {
  return (
    <div>
        <p>Home page</p>
        <MainCard image={image2} imageText={"image2"} title={"Name of Website"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
        <MainCard image={image2} imageText={"image2"} title={"Who we are"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
    </div>
  );
};

export default HomePage;