import React from "react";
import "../style/navigation.css"

const NavigationSidebar = () => {
    const links = [
        { text: "Über mich", href: "/", target: "_self" },
        { text: "Ausbildung", href: "/ausbildung", target: "_self" },
        { text: "Erfahrungen", href: "/erfahrungen", target: "_self" },
        { text: "Skills", href: "/skills", target: "_self" },
        { text: "Projekte", href: "/projekte", target: "_self" },
        { text: "Sport", href: "/sportliche-karriere", target: "_self" },
        { text: "Hobbies", href: "/hobbies", target: "_self" },
        { text: "Kontakt", href: "/kontakt", target: "_self" }
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

