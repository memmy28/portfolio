import React from 'react'
import Labels from "./ComponentLabels";
import Buttons from "./ComponentButtons";
import "../style/section-about.css"

const SectionAboutMe = () => {
    return (
        <section className="about" id="about">
            <h1>Alema Hadzic</h1>
            <Labels labels={["Softwareentwicklerin", "Informatikstudentin"]} />
            <p>Hi! Ich bin eine 24-jährige Informatikstudentin in meinem letzten Semester an der Georg Simon Ohm Hochschule in
                Nürnberg und werde mein Bachelorstudium voraussichtlich im Sommersemester 2025 beenden. Neben dem Studium arbeite 
                ich als Werkstudentin im Bereich Softwareentwicklung bei insert effect in Nürnberg. Ich liebe es neue Projekte anzugehen
                und neue Erfahrungen in verschiedenen Bereichen zu sammeln.</p>
            <Buttons buttons={[
                { text: "Zu meinem Lebenslauf", href: "assets/cv.pdf", target: "_blank", download: true },
                { text: "Kontaktiere mich", href: "/kontakt", target: "_self", download: false },
            ]} />
        </section>
    );
};

export default SectionAboutMe;