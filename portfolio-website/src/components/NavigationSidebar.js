import React from "react";
import "../style/navigation.css"

const NavigationSidebar = () => {
    const links = [
        { text: "Über mich", href: "#about", target: "_self" },
        { text: "Ausbildung", href: "#education", target: "_self" },
        { text: "Beruf", href: "#experience", target: "_self" },
        { text: "Skills", href: "#skills", target: "_self" },
        { text: "Projekte", href: "#projects", target: "_self" },
        { text: "Sportliche Karriere", href: "#sports", target: "_self" },
        { text: "Hobbies", href: "#hobbies", target: "_self" },
        { text: "Kontakt", href: "#contact", target: "_self" }
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

