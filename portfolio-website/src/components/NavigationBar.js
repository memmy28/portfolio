import React, { useState, useRef } from "react";
import "../style/navigation.css"

const NavigationBar = () => {
    const links = [
        { text: "Über mich", href: "/", target: "_self" },
        { text: "Ausbildung", href: "/ausbildung", target: "_self" },
        { text: "Erfahrungen", href: "/erfahrungen", target: "_self" },
        { text: "Skills", href: "/skills", target: "_self" },
        { text: "Projekte", href: "/projekte", target: "_self" },
        { text: "Sportliche Karriere", href: "/sportliche-karriere", target: "_self" },
        { text: "Hobbies", href: "/hobbies", target: "_self" },
        { text: "Kontakt", href: "/kontakt", target: "_self" }
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
