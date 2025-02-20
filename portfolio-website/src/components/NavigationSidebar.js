import React from "react";
import "../style/navigation.css"

const NavigationSidebar = () => {
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

    return (
        <div className="sidebar">
            <nav className="navigation">
                {links.map((link, index) => (
                    <a className="link" key={index} href={link.href}>{link.text}</a>
                ))}
            </nav>
        </div>
    );
};

export default NavigationSidebar;

