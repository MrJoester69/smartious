import React from "react";

function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="hero">Smartious</a>
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/scholar'>Scholarships</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;