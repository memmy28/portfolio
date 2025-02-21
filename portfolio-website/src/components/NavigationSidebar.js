import React from "react";
import "../style/navigation.css"

const NavigationSidebar = () => {
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

    return (
        <div className="sidebar">
            <nav className="navigation">
                {links.map((link, index) => (
                    <a className="link" key={index} href={link.href} target={link.target}>{link.text}</a>
                ))}
            </nav>
        </div>
    );
};

export default NavigationSidebar;

