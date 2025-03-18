import "../style/section-sports.css"
import "../App.css"

import React from 'react'
import Buttons from "./ComponentButtons"
import { CompetitionCard } from "./ComponentCards";

const SectionSports = () => {
    const competitions2024 = [
        {
            title: "Dutch Open",
            time: "2024",
            place: "Eindthoven, Niederlande",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2024/dutch-open.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Luxembourg Open",
            time: "2024",
            place: "Luxemburg, Luxemburg",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2024/lux-open.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Slovenia Open",
            time: "2024",
            place: "Ljubljana, Slowenien",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2024/slovenia-open.jpg",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
    ];

    const competitions2023 = [
        {
            title: "Grand Prix",
            time: "2023",
            place: "Taiyuan, China",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/gp-3.jpg",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2023",
            place: "Paris, Frankreich",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/gp-2.png",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Tallinn Open",
            time: "2023",
            place: "Tallinn, Estland",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2023/tallinn-open.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Universiade",
            time: "2023",
            place: "Chengdu, China",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2023/universiade.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft (OLY)",
            time: "2023",
            place: "Paris, Frankreich",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/dm-2.jpg",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Europa-Spiele",
            time: "2023",
            place: "Krakau, Polen",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/european-games.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2023",
            place: "Rom, Italien",
            placement: "16. Platz",
            description: [],
            image: "assets/competitions/2023/gp-1.png",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Dutch Open",
            time: "2023",
            place: "Eindthoven, Niederlande",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2023/dutch-open.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2023",
            place: "Nürnberg, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2023/dm.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
    ];

    const competitions2022 = [
        {
            title: "Deutsche Hochschul meisterschaft",
            time: "2022",
            place: "Bad Soden-Salmünster, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/dhm.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Romania Open",
            time: "2022",
            place: "Bukarest, Rumänien",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/romania-open.jpg",
            alt: "Bild von mir und meinem Coach auf der Kampffläche.",
            buttons: []
        },
        {
            title: "Europa meisterschaft",
            time: "2022",
            place: "Manchester, Großbritannien",
            placement: "5. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2022",
            place: "Weißenburg, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/dm.webp",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Sofia Open",
            time: "2022",
            place: "Sofia, Bulgarien",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2022/sofia-open.webp",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
        {
            title: "Fujairah Open",
            time: "2022",
            place: "Fujairah, VAE",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/fujairah-open.webp",
            alt: "Medaillenfoto von den Slovenian Open 2024.",
            buttons: []
        },
    ];

    return (
        <div className="App">
            <section class="content" id="sports">
                <h1>Sportliche Karriere</h1>
                <p>Seit 2017 bin ich Mitglied im Deutschen Taekwondo Nationalteam und habe seitdem an einer Vielzahl von Wettkämpfen teilgenommen. Zu meinen größten Erfolgen gehören, neben zwei Bronze-Medaillen bei Europameisterschaften (U18 und U21) und einer Bronze-Medaille bei den Welthochschulspielen, mehrere Teilnahmen an Europameisterschaften und Grand Prixs, sowie eine Teilnahme an einer Weltmeisterschaft und an den Europa-Spielen. Außerdem bin ich neunfache Deutsche Meisterin und habe 32 Medaillen bei internationalen Ranglisten-Turnieren gewonnen.</p>
                <p>Auf dieser Seite sind meine Wettkampferfolge seit 2022 aufgeführt, einschließlich erzielter Platzierungen.</p> 
                <Buttons buttons={[
                    { text: "Zu allen Erfolgen", href: "https://www.taekwondo-oezer.de/team/senioren/alema-hadzic/", target: "_blank", download: false },
                ]} />

                <h2>Erfolge 2024</h2>
                <div id="competition-container-main">
                    {competitions2024.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>

                <h2>Erfolge 2023</h2>
                <div id="competition-container-main">
                    {competitions2023.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>

                <h2>Erfolge 2022</h2>
                <div id="competition-container-main">
                    {competitions2022.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SectionSports;