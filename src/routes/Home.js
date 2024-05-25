import React from "react";
import './../css/HomeStyle.css';
import { NavLink } from "react-router-dom";
import homeImg from './../Images/homeImg.jpg';


const Home=() => {
    return (
        <>
        <div className="homeSection">
        <div className="homeContent">
        <h1 className="homeHeading"> Best Investors  </h1>
        <p className="homePara">   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis iusto facere,
               ullam vero ab similique provident quia doloribus non animi reprehenderit 
               excepturi, ratione, illum accusamus at nihil facilis mollitia. Iure?
              Omnis accusamus fuga repellendus. Neque, nemo laborum! Saepe a fugiat rem impedit, 
              blanditiis placeat sit minus in voluptatem vero sunt ullam porro id quisquam 
              temporibus aliquid! Excepturi aliquid deleniti hic?</p>
        
        <div className="btnBox">
            <div className="btn">
            <NavLink to='/About' className="readMore" activeClassName="activeItem">Read More</NavLink>

            </div>
        </div>
        </div>
        <div className="imageContent">
            <img src={homeImg} alt="HomeImage"></img>
        </div>
        </div>
        </>
    )
}

export default Home;