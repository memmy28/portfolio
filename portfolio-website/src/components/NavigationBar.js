import React, { useState, useEffect, useRef } from "react";
import "../style/navigation.css"

const NavigationBar = () => {
    const links = [
        { text: "About", href: "#about" },
        { text: "Education", href: "#education" },
        { text: "Experience", href: "#experience" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Sports", href: "#sports" },
        { text: "Hobbies", href: "#hobbies" },
        { text: "Contact", href: "#contact" }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Hamburger open: " + isOpen); // TODO: remove
    };

    return (
        <div className="hamburger-bar">
            <span className="hamburger-icon" onClick={toggleMenu}>&#9776;</span>

            {isOpen && (
                // TODO: display dropdown
                <div className="dropdown-menu">
                    {links.map((link, index) => (
                        <a className="dropdown-link" key={index} href={link.href}>{link.text}</a>
                    ))}
                </div>
            )}

        </div>
    );
};

export default NavigationBar;
