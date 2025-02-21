import React from 'react'
import Labels from "./ComponentLabels";
import Buttons from "./ComponentButtons";
import "../style/section-about.css"

const SectionAboutMe = ({ labels }) => {
    return (
        <section className="about" id="about">
            <h1>Alema Hadzic</h1>
            <Labels labels={["Software Developer", "Computer Science Student"]} />
            <p>Hi! I'm a 24-year-old Computer Science student in my final semester at Georg Simon Ohm Hochschule in
                Nuremberg, Germany. I will graduate with a bachelor's degree in the spring of 2025. Currently, I work
                part-time as a Software Developer at insert effect in Nuremberg, Germany. I love tackling new projects
                and gaining experience in different areas.</p>
            <Buttons buttons={[
                { text: "Download CV", href: "assets/cv.pdf", target: "_blank", download: true },
                { text: "Contact me", href: "#contact", target: "_self", download: false },
            ]} />
        </section>
    );
};

export default SectionAboutMe;