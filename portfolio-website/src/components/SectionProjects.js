import "../style/section-projects.css"
import "../App.css"

import React from 'react'
import ProjectCard from "./ComponentCards";

const SectionProjects = () => {
    const projects = [
        {
            title: "Automatisches Schneiden von Taekwondo-Livestreams",
            time: "2024",
            place: "Nürnberg, Deutschland",
            labels: ["Python", "OpenCV", "Tesseract", "SciKit Image", "PyCharm"],
            description: ["Die Liveübertragung eines Taekwondo-Wettkampfs kann mehrere Stunden lang sein und eine hohe Anzahl an Einzelkämpfen enthalten. Darin einen bestimmten Kampf zu finden kann somit schwierig sein. Dieses Projekt befasst sich mit einer automatischen Identifizierung der Zeitpunkte, zu denen die Kämpfe einer Taekwondo-Liveübertragung starten und enden.", "Zusätzlich werden die Kampfnummern und Namen der Athleten aus dem Video extrahiert und mit den identifizierten Zeitpunkten aufgelistet, um die Suche nach einem bestimmten Kampf zu vereinfachen."],
            image: "assets/projects/bachelorarbeit.jpg",
            alt: "Testframes, die bei der Entwicklung des Projekts verwendet wurden",
            buttons: []
        },
        {
            title: "Chatbot zur Beantwortung von Fragen zum Studium",
            time: "2023-2024",
            place: "Nürnberg, Deutschland",
            labels: ["C#", "Rasa", "Misty Robot", "Visual Studio"],
            description: ["Bei diesem Projekt wurde der Misty Roboter so programmiert, dass er auf Messen mit Besuchern und potentiellen Studenten kommunizieren kann.", "Er kann Fragen zum Informatikstudium an der Technischen Hochschule Nürnberg beantworten und einfache Kommandos befolgen."],
            image: "assets/projects/misty.jpg",
            alt: "Roboter namens Misty",
            buttons: [
                { text: "Demo", href: "https://www.youtube.com/watch?v=QuMzrPgPDSg", target: "_blank", download: false },
                { text: "Längere Demo", href: "https://www.youtube.com/watch?v=XntisDvQ60I", target: "_blank", download: false },
            ]
        },
        {
            title: "Dungeon Rollout",
            time: "2021",
            place: "Nürnberg, Deutschland",
            labels: ["C#", "Windows Forms", "Gimp", "Visual Studio"],
            description: ["Im Rahmen der Software Engineering Vorlesung sollte ein einfaches Spiel entworfen und programmiert werden.", "Mein Team und ich entschieden uns für ein 2D Spiel, bei dem ein Kreis von den eckigen Formen in einem Kerker gefangen genommen wurde und fliehen muss. Dabei muss er an den bösen Drei, Vier- und Fünfecken verbeikommen."],
            image: "assets/projects/dungeon-rollout.jpg",
            alt: "Startbildschirm zum Spiel Dungeon Rollout",
            buttons: []
        },
    ];

    return (
        <div className="App">
            <section class="content" id="projects">
                <h1>Projekte</h1>
                <p>Hier befindet sich eine Zusammenfassung der Projekte, die ich in letzter Zeit angegangen bin und an denen ich mitgearbeitet habe. Darunter befinden sich Projekte die an der Hochschule durchgeführt wurden, sowie private Projekte und Projekte von der Arbeit bei insert effect.</p>
                <div id="projects-container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SectionProjects;