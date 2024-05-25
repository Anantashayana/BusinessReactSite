import React from "react";
import './../css/PriceStyle.css';
import one from './../Images/1.avif';
import two from './../Images/2.avif'
import three from './../Images/3.avif'

const Pricing = () => {
    // Sample data for three cards
    const cardAbout =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quae modi repudiandae culpa. Aliquid ex architecto sapiente, odio nobis amet esse perspiciatis porro natus illo dolor repellendus aspernatur nam debitis";
    
    const cardData = [
        { imgSrc: one, head:'Freemium',about: cardAbout, price: '$10', buttonText: 'Buy Now' },
        { imgSrc: two, head:'Standard',about: cardAbout, price: '$20', buttonText: 'Buy Now' },
        { imgSrc: three, head:'Premium',about: cardAbout, price: '$30', buttonText: 'Buy Now' }
    ];

    return (
        <>
            <section className="pricing">
                <div className="cards">
                    {/* Loop through the card data to generate multiple cards */}
                    {cardData.map((card, index) => (
                        <div key={index} className="card">
                            {/* Heading */}
                            <div className="cardImg">
                                <img src={card.imgSrc} alt={`Card ${index + 1}`} />
                            </div>
                            {/* Card Heading */}
                            <div className="headCard">
                                {card.head}
                            </div>
                            {/* About */}
                            <div className="aboutCard">
                                {card.about}
                            </div>
                            {/* Price */}
                            <div className="priceCard">
                                {card.price}
                            </div>
                            {/* Button */}
                            <div className="buttonCard">
                                <button>{card.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Pricing;
