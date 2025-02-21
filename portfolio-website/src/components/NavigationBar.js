import React, { useState, useRef } from "react";
import "../style/navigation.css"

const NavigationBar = () => {
    const links = [
        { text: "About", href: "#about", target: "_self" },
        { text: "Education", href: "#education", target: "_self" },
        { text: "Experience", href: "#experience", target: "_self" },
        { text: "Skills", href: "#skills", target: "_self" },
        { text: "Projects", href: "#projects", target: "_self" },
        { text: "Sports", href: "#sports", target: "_self" },
        { text: "Hobbies", href: "#hobbies", target: "_self" },
        { text: "Contact", href: "#contact", target: "_self" }
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
                        <a className="dropdown-link" key={index} href={link.href} onClick={toggleMenu} target={link.target}>{link.text}</a>
                    ))}
                </div>
            )}
        </div>
    );

};

export default NavigationBar;
