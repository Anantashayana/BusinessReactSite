// Contact.js

import React from "react";
import './../css/ContactStyle.css';
import contactImage from './../Images/contact-us.gif';

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="contactContainer">
                    <div className="ContactForm">
                        {/* Heading */}
                        <div className="contactHeader">Contact Us</div>
                        {/* Form */}
                        <form className="form">
                            {/* Name */}
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />

                            {/* Email */}
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />

                            {/* Message */}
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Your message" required></textarea>

                            {/* Submit Button */}
                            <div className="submitButton">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="contactImage">
                        <img src={contactImage} alt="Contact Us" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
