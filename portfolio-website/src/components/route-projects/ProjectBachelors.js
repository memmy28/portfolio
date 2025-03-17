import "../../style/section-projects.css"
import "../../App.css"

import React from 'react'
import Buttons from "../ComponentButtons"

const ProjectBachelors = () => {
    return (
        <div className="App">
            <section class="content" id="project-details">
                <h1>Automatisches Schneiden von Taekwondo-Livestreams</h1>
                <p>Im Rahmen meiner Bachelorarbeit wurde ein Prototyp für ein Programm implementiert, welches einzelne Kämpfe innerhalb von Taekwondo-Livestreams identifiziert. Zu jedem Kampf werden zudem die Zeitpunkte extrahiert, zu denen sich die Kampfnummern ändern, ebenso wie die Namen der Athlet:innen, die den jeweiligen Kampf bestreiten.</p>

                {/* technologien */}
                <h2>Verwendete Technologien</h2>
                <ul>
                    <li>Programmiersprache: Python</li>
                    <li>Bibliotheken zur Bildverarbeitung: OpenCV und Scikit-Image</li>
                    <li>Bibliotheken zur Videoverarbeitung: OpenCV und MoviePy</li>
                    <li>Paket zur Texterkennung: Pytesseract</li>
                    <li>Paket zur Erstellung grafischer Benutzeroberflächen: Tkinter</li>
                </ul>

                {/* vorgehensweise */}
                <h2>Vorgehensweise</h2>
                <div className="text-box">
                    <div className="text">
                        <p>Das Projekt ist aus sieben Schritten aufgebaut:</p>
                        <p> Nach der Initialisierung wird zunächst die Position des Scoreboards und anschließend die Position der Kampfnummer lokalisiert. Anschließend wird das gesamte Video verarbeitet. Aus dem verarbeiteten Video werden im nächsten Schritt die relevanten Informationen extrahiert. bei den relevanten Informationen handelt es sich um die Start- und Endzeitpunkte der einzelnen Kämpfe, sowie die Namen der Athlet:innen.</p>
                        <p>Auf Grundlage dieser Informationen können schließlich die Kampfvideos gespeichert werden. Die relevanten Informationen werden zusätzlich in einem Inhaltsverzeichnis angezeigt.</p>
                    </div>
                    <div className="image" style={{ flex: "0 0 40%" }}>
                        <img src="../../../assets/projects/bachelor/entwurf.png" alt="Entwurf des Projekts, der sich aus folgenden Schritten zusammensetzt: Initialisierung, Lokalisierung des Scoreboards, Lokalisierung der Kampfnummer, Verarbeitung des Videos, Extraktion der relevanten Informationen, Speicherung der Videos und Erstellung eines Inhaltsverzeichnisses." />
                    </div>
                </div>

                {/* lokalisierung scoreboard */}
                <h2>Lokalisierung des Scoreboards</h2>
                <p>Um das Scoreboard zu lokalisieren wird zunächs ein zufälliges Frame aus dem Livestream extrahiert:</p>
                <img src="../../../assets/projects/bachelor/bachelorarbeit.jpg" style={{ width: "100%", height: "auto" }} alt="Frame aus einem Taekwondo-Livestream." />
                <p>Da sich das Scoreboard in einer der vier Ecken befinden muss, werden die vier Ecken des Frames zunächst ausgeschnitten:</p>
                <img src="../../../assets/projects/bachelor/lokalisierung-scoreboard-1.png" style={{ width: "100%", height: "auto" }} alt="Ausschnitt der vier Ecken des Frames." />
                <p>Auf jede der vier Ecken wird anschließend Texterkennung angewendet. Es wird angenommen, dass die Ecke, mit den meisten erkannten Zeichen, das Scoreboard enthält. In diesem Fall ist dies Ecke eins.</p>
                <p>In dieser Ecke wird nun der Bereich berechnet, der von Textzeichen eingenommen wird. Da dieser Bereich alle wichtigen Informationen des Scoreboards enthält, handelt es sich dabei um den relevanten Teil des Scoreboards:</p>
                <img src="../../../assets/projects/bachelor/lokalisierung-scoreboard-2.png" style={{ width: "60%", height: "auto" }} alt="Ausschnitt der vier Ecken des Frames." />

                {/* lokalisierung kampfnummer */}
                <h2>Lokalisierung der Kampfnummer</h2>
                <p>Die Lokalisierung der Kampfnummer funktioniert analog zur Lokalisierung des Scoreboards. Als Ausgangsbild wird jedoch das ausgeschnittene Scoreboard verwendet. Darin wird Texterkennung angewendet, drei aufeinanderfolgende Zahlen werden rausgefiltert und der Bereich, in dem sich diese Zahlen befinden, wird ausgerechnet.</p>

                {/* extraktion der informationen */}
                <h2>Extraktion relevanter Informationen</h2>
                <p>Um die Stellen zu identifizieren, an denen im Livestream die Kämpfe wechseln, werden die Stellen gesucht, an denen sich die Kampfnummern ändern. Dazu wird alle Paar Frames die Kampfnummer mittels Texterkennung aus dem Frame extrahiert. Wenn sich die Kampfnummer zwischen zwei Frames ändert, wird die genaue Stelle mithilfe einer binären Suche identifiziert. Die dabei identifizierte Framenummer wird anschließend in eine Zeit umgewandelt. Dieses Vorgehen wird für den gesamten Livestream durchgeführt.</p>
                <p>Wenn die einzelnen Kämpfe bekannt sind, wird für jeden Kampf eine Texterkennung durchgeführt, um die Namen der Athlet:innen zu identifizieren. Um nur tatsächliche Namen von Athlet:innen zu extrahieren, werden die erkannten Namen mit der Teilnehmerliste des jeweiligen Wettkampfs abgeglichen. Diese Teilnehmerliste wird vor dem Start des Programms vom User zur Verfügung gestellt.</p>

                <Buttons buttons={[
                    { text: "Zurück zu den Projekten", href: "/projekte", target: "_self", download: false },
                ]} />
            </section>
        </div>
    );
};

export default ProjectBachelors;