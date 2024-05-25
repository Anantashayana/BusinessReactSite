import React from "react";
import './../css/FeatureStyle.css';
import one from './../Images/shape1.avif'
import two from './../Images/shape2.jpg'
import three from './../Images/shape3.avif'
import four from './../Images/shape4.avif'

const Features=() => {
    const cardAbout =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quae modi repudiandae culpa.";


    const sub = [
        { imgSrc: one, head:'Freemium',about: cardAbout },
        { imgSrc: two, head:'Standard',about: cardAbout},
        { imgSrc: three, head:'Standard',about: cardAbout },
        { imgSrc: four, head:'Premium',about: cardAbout }
    ];

    return (
        <>


        <section className="Features">
            <div className="featuresBlock">
                {/* Main Block - 50% space */}
                <div className="mainBlock">
                    {/* heading  */}
                    <div className="featuresHead">
                        We're Stratergic Marketing Agency
                    </div>
                    {/* content */}
                    <div className="aboutFeatures">
                    We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives 
                    </div>
                </div>
                {/* Right Block - 50%  */}
                <div className="secondBlock">
                    {/* Loop through the sub to generate multiple  */}
                     {sub.map((feature, index) => (
                     <div key={index} className="feature">
                        {/* Image */}
                        <div className="imageBlock">
                            <img src={feature.imgSrc} alt=""></img>
                        </div>
                        {/* Heading */}
                        <div className="featureHeader">
                        {feature.head}
                        </div>
                        {/* About */}
                        <div className="aboutFeature">
                        {feature.about}
                        </div>
                     </div>   
                     ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default Features;