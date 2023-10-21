import React from 'react';
import '../styles.css'; // Import your CSS file
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className = "bg-slate-200 shadow-md">
            <div className = "flex justify-between items-center max-w-6xl mx-auto p-3">
            <h1 className = "font-bold text-sm sm:text-xl flex flex-wrap">
                <Link to = '/Home'>
                <span className= 'vitruvius-text' >Vitruvius</span>
                <span className = 'travel-text'>Travel</span>
                </Link>
            </h1> 
            <form className= "bg-slate-100 p-3 rounded-lg flex items-center">
                <input type = "text" placeholder = "Search ..." className = "bg-transparent focus:outline-none w-24 sm:w-64"></input>
                <FaSearch className = 'text-slate-600'></FaSearch>
            </form>
            <ul className = "flex gap-4">
                <Link to = '/Home'>
                <li className = "hidden sm:inline hover:underline">
                    Home
                </li>
                </Link>
                <Link to = '/About'>

                <li className = "hidden sm:inline hover:underline">
                    About
                </li>
                </Link>
                <Link to = '/SignIn'>

                <li className = "hidden sm:inline hover:underline">
                    Sign-In
                </li>
                </Link>
            </ul>
            </div>

        </header>
    );
}

export default Header;
