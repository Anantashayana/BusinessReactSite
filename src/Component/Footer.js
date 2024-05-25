import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './../css/FooterStyle.css'

const Footer=()=> {
    return (
        <>
        <div className="footer">
        <div className="container container-flex">
        <div className="icons">
            <FacebookIcon className="icon"></FacebookIcon>
            <InstagramIcon className='icon'></InstagramIcon>
            <TwitterIcon className='icon'></TwitterIcon>
            <LinkedInIcon className='icon'></LinkedInIcon>
        </div>
        <div className="line">
            <hr></hr>
            <hr></hr>
        </div>
        <div className="copyright">
            <p> All rights reserved &copy;</p>
            <p> Made by Anant</p>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default Footer;