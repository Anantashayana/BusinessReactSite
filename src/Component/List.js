import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from './../Images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import  './../css/ListStyle.css';

const List=() => {

    useEffect(() => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('nav-container')[0];

        const handleClick = () => {
            navbarLinks.classList.toggle('active');
        };

        toggleButton.addEventListener('click', handleClick);

        return () => {
            // Cleanup to remove the event listener when the component unmounts
            toggleButton.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array to ensure useEffect runs only once on mount

    return (
        <>
        <header>
        <div className="container container-flex"> 
        <div >
            <img src={logo} alt="logo" className="logo"></img>
        </div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <nav>
            <div className="nav-container">
                <NavLink exact to='/' className="navItem" activeClassName="activeItem">Home</NavLink>
                <NavLink to='/Features' className="navItem" activeClassName="activeItem">Features</NavLink>
                <NavLink to='/Pricing' className="navItem" activeClassName="activeItem">Pricing</NavLink>
                <NavLink to='/About' className="navItem" activeClassName="activeItem">About</NavLink>
                <NavLink to='/Contact' className="navItem" activeClassName="activeItem">Contact</NavLink>
            </div>
        </nav>
        <div className="icons">
                <SearchIcon className="icon" />
                {/* <PersonIcon className="icon"></PersonIcon>
                <ContactsIcon className="icon"/> */}
            </div>
        </div>
        </header>
        </>
    )
}

export default List;