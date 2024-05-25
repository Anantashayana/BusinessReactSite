import React from "react";
import './../css/AboutStyle.css'
import one from './../Images/r1.avif';
import two from './../Images/r2.avif';
import three from './../Images/r3.jfif'

const About=() => {
    const abouttext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    const blogs = [
        {img:one, date:"13/07/2022", head:"Terminator-1", about:abouttext},
        {img:two, date:"21/09/2023", head:"Terminator-2", about:abouttext},
        {img:three, date:"11/01/2024", head:"Treminator-3", about:abouttext}
    ]
    return (
        <>

<main class="main-content">
    <section class="about">
        <div className="blogHolder">
           {blogs.map((blog,index)=> (
           <div className="blog">
                <div className="imageHolder">
                <img src={blog.img} alt=""></img>
                </div>
                <div className="date">
                {blog.date}
                </div>
                <div className="blogHead">
                {blog.head}
                </div> 
                <div className="aboutBlog">
                    {blog.about}
                </div>
            </div>
           ))} 
        </div>
         </section>
     </main>

     <header class="header">
    <h1>Subscribe to get information, latest news and other interesting offers about Market Think</h1>
    <form class="subscription-form">
        <input type="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
    </form>
</header>
        </>
    )
}

export default About;