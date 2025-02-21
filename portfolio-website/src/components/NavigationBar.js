import React, { useState, useRef } from "react";
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
    const dropdownMenu = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Hamburger open: " + isOpen); // TODO: remove
    };

    const closeMenu = (e) => {
        if (isOpen && !dropdownMenu.current?.contains(e.target)) {
            toggleMenu();
        }
    };

    document.addEventListener('mousedown', closeMenu)

    return (
        <div className="hamburger-bar" ref={dropdownMenu}>
            <span className="hamburger-icon" onClick={toggleMenu}>&#9776;</span>

            {isOpen && (
                <div className="dropdown-menu">
                    {links.map((link, index) => (
                        <a className="dropdown-link" key={index} href={link.href} onClick={toggleMenu}>{link.text}</a>
                    ))}
                </div>
            )}
        </div>
    );

};

export default NavigationBar;
