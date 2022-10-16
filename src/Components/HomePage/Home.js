import React from "react";
import MainCard from "../Roi/MainCard.js";
import image2 from "./image2.jpg";
import big1 from "./big1.jpg";
import big2 from "./big2.jpg";




const Home = () => {
  return (
    <div>
        <MainCard image={big1} imageText={"big1"} title={"Welcome!"} content={"Learn. Explore. Plan Your Future."} linkText={"test linke text"}/>
        <MainCard image={big2} imageText={"big2"} title={"Our Mission"} content={"Our mission is to help you become a finance expert. We get it: money management is hard. That's why we made this website, so that you have everything you need in one place. Learn first HOW to budget and different investment options, then start budgetting with our budgetting tool. Then check out different investment options and predict how much money you will make based on different rates of returns. Well...what are you waiting for? Go explore!"} linkText={"test linke text"}/>
    </div>
  );
};

export default Home;