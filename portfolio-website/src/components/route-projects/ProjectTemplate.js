import "../../style/section-projects.css"
import "../../App.css"

import React from 'react'
import Buttons from "../ComponentButtons"

const ProjectBachelors = () => {
    return (
        <div className="App">
            <section class="content" id="project-details">
                <h1>Überschrift</h1>
                <p>Beschreibung</p>

                <h2>Unterüberschrift</h2>
                <div className="text-box">
                    <div className="text">
                        <p>Text auf der linken Seite.</p>
                    </div>
                    <div className="image" style={{ flex: "0 0 20%" }}>
                        <img src="../../../favicon-32x32.png" alt="Beispielsbild." />
                    </div>
                </div>

                <Buttons buttons={[
                    { text: "Zurück zu den Projekten", href: "/projekte", target: "_self", download: false },
                ]} />
            </section>
        </div>
    );
};

export default ProjectBachelors;