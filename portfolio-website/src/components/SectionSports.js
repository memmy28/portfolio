import React from 'react'
import DutchOpen from "./route-sports/2024DutchOpen";
import Buttons from "./ComponentButtons";
import "../style/section-about.css"

const SectionSports = () => {
    return (
        <section className="about" id="about">
            <h1>Sportliche Karriere</h1>
            <p>Seit 2017 bin ich Mitglied des Perspektivkaders der Deutschen Taekwondo Union.</p>
            <Buttons buttons={[
                { text: "Dutch Open 2024", href: "assets/cv.pdf", target: "_blank", download: false },
            ]} />
        </section>
    );
};

export default SectionSports;