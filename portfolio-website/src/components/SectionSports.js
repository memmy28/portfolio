import "../style/section-projects.css"
import "../App.css"

import React from 'react'
import Buttons from "./ComponentButtons";

import DutchOpen from "./route-sports/2024DutchOpen";

const SectionSports = () => {
    return (
        <div className="App">
            <section class="content" id="sports">
            <h1>Sportliche Karriere</h1>
            <p>Seit 2017 bin ich Mitglied des Perspektivkaders der Deutschen Taekwondo Union.</p>
            <Buttons buttons={[
                { text: "Dutch Open 2024", href: "assets/cv.pdf", target: "_blank", download: false },
            ]} />
        </section>
        </div>

        
    );
};

export default SectionSports;