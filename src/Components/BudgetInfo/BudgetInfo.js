import React from "react";
import MainCard from "../Roi/MainCard.js";
import image2 from "../Roi/image2.jpeg";

const BudgetInfo = () => {
  return (
    <div>
        <MainCard image={image2} imageText={"image2"} title={"Budget Info"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
        <MainCard image={image2} imageText={"image2"} title={"Budget Info"} content={"test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content test content text content text content "} linkText={"test linke text"}/>
    </div>
  );
};

export default BudgetInfo;