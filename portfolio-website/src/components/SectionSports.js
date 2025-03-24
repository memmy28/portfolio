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
            alt: "Bild von meinem Coach und mir auf der Kampffläche bei den Dutch Open 2024.",
            buttons: []
        },
        {
            title: "Luxembourg Open",
            time: "2024",
            place: "Luxemburg, Luxemburg",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2024/lux-open.jpg",
            alt: "Bild von meinem Coach und mir auf der Kampffläche bei den Luxembourg Open 2024.",
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
            alt: "Bild von meinem Coach und mir in der Kampfpause beim Grand Prix 2023.",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2023",
            place: "Paris, Frankreich",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/gp-2.png",
            alt: "Bild von mir auf der Kampffläche beim Grand Prix 2023.",
            buttons: []
        },
        {
            title: "Tallinn Open",
            time: "2023",
            place: "Tallinn, Estland",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2023/tallinn-open.jpg",
            alt: "Medaillenfoto von den Tallinn Open 2023.",
            buttons: []
        },
        {
            title: "Universiade",
            time: "2023",
            place: "Chengdu, China",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2023/universiade.jpg",
            alt: "Bild von mir auf der Kampffläche bei der Universiade 2023.",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft (OLY)",
            time: "2023",
            place: "Düsseldorf, Deutschland",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2023/dm-2.jpg",
            alt: "Bild von mir auf der Kampffläche bei der Deutschen Meisterschaft 2023.",
            buttons: []
        },
        {
            title: "Europa-Spiele",
            time: "2023",
            place: "Krakau, Polen",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2023/european-games.jpg",
            alt: "Bild von mir auf der Kampffläche bei den Europaspielen 2023.",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2023",
            place: "Rom, Italien",
            placement: "16. Platz",
            description: [],
            image: "assets/competitions/2023/gp-1.png",
            alt: "Bild von mir auf der Kampffläche beim Grand Prix 2023.",
            buttons: []
        },
        {
            title: "Dutch Open",
            time: "2023",
            place: "Eindthoven, Niederlande",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2023/dutch-open.jpg",
            alt: "Bild von mir auf der Kampffläche bei den Dutch Open 2023.",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2023",
            place: "Nürnberg, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2023/dm.jpg",
            alt: "Medaillenfoto von der Deutschen Meisterschaft 2023.",
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
            alt: "Medaillenfoto von der Deutschen Hochschulmeisterschaft 2022.",
            buttons: []
        },
        {
            title: "Romania Open",
            time: "2022",
            place: "Bukarest, Rumänien",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/romania-open.jpg",
            alt: "Medaillenfoto von den Romania Open 2022.",
            buttons: []
        },
        {
            title: "Europa meisterschaft",
            time: "2022",
            place: "Manchester, Großbritannien",
            placement: "5. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2022",
            place: "Weißenburg, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/dm.webp",
            alt: "Medaillenfoto von der Deutschen Meisterschaft 2022.",
            buttons: []
        },
        {
            title: "Sofia Open",
            time: "2022",
            place: "Sofia, Bulgarien",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2022/sofia-open.webp",
            alt: "Medaillenfoto von den Sofia Open 2022.",
            buttons: []
        },
        {
            title: "Fujairah Open",
            time: "2022",
            place: "Fujairah, VAE",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2022/fujairah-open.webp",
            alt: "Medaillenfoto von den Fujairah Open 2022.",
            buttons: []
        },
    ];

    const competitions2021 = [
        {
            title: "Bosnia and Herzegovina Open",
            time: "2021",
            place: "Sarajevo, Bosnien und Herzegovina",
            placement: "2. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "French Open",
            time: "2021",
            place: "Paris, Frankreich",
            placement: "2. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Polish Open",
            time: "2021",
            place: "Warschau, Polen",
            placement: "1. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Open Multi European Games",
            time: "2021",
            place: "Sofia, Bulgarien",
            placement: "3. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft (Oly)",
            time: "2021",
            place: "Dortmund, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Europa meisterschaft",
            time: "2021",
            place: "Sofia, Bulgarien",
            placement: "5. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2020",
            place: "Lünen, Deutschland",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2020/dm.jpg",
            alt: "",
            buttons: []
        },
    ];

    const competitions2019 = [
        {
            title: "French Open",
            time: "2019",
            place: "Paris, Frankreich",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2019/french-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Croatia Open",
            time: "2019",
            place: "Zagreb, Kroatien",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2019/croatia-open.png",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Hochschul meisterschaft",
            time: "2019",
            place: "Gelnhausen, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2019/dhm.png",
            alt: "",
            buttons: []
        },
        {
            title: "Serbia Open",
            time: "2019",
            place: "Belgrad, Serbien",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2019/serbia-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Europa meisterschaft (U21)",
            time: "2019",
            place: "Helsingborg, Schweden",
            placement: "5. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2019",
            place: "Rom, Italien",
            placement: "Teilnahme",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft (U21)",
            time: "2019",
            place: "Willsdruff, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Weltmeisterschaft",
            time: "2019",
            place: "Manchester, Großbritannien",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2019/wm.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "German Open",
            time: "2019",
            place: "Hamburg, Deutschland",
            placement: "2. Platz",
            description: [],
            image: "assets/competitions/2019/german-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Dutch Open",
            time: "2019",
            place: "Eindthoven, Niederlande",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2019/dutch-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Egypt Open",
            time: "2019",
            place: "Hurghada, Ägypten",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2019/egypt-open.jpg",
            alt: "",
            buttons: []
        },
    ];

    const competitions2018 = [
        {
            title: "Europa meisterschaft (U21)",
            time: "2018",
            place: "Warschau, Polen",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2018/em-u21.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2018",
            place: "Manchester, Großbritannien",
            placement: "Teilnahme",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2018",
            place: "Taoyuan, Taiwan",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2018/gp-2.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Grand Prix",
            time: "2018",
            place: "Moskau, Russland",
            placement: "Teilnahme",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Luxembourg Open",
            time: "2018",
            place: "Luxemburg, Luxemburg",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2018/lux-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Austrian Open",
            time: "2018",
            place: "Innsbruck, Österreich",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2018/austrian-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Europa meisterschaft",
            time: "2018",
            place: "Kasan, Russland",
            placement: "5. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Dutch Open",
            time: "2018",
            place: "Eindthoven, Niederlande",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2018/dutch-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Sofia Open",
            time: "2018",
            place: "Sofia, Bulgarien",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2018/sofia-open.jpg",
            alt: "",
            buttons: [],
            credits: "Foto: DNS"
        },
        {
            title: "Egypt Open",
            time: "2018",
            place: "Luxor, Ägypten",
            placement: "3. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschadt",
            time: "2018",
            place: "Düsseldorf, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2018/dm.jpg",
            alt: "",
            buttons: []
        },
    ];

    const competitions2017 = [
        {
            title: "Croatia Open",
            time: "2017",
            place: "Zagreb, Kroatien",
            placement: "2. Platz",
            description: [],
            image: "assets/filler.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Europa meisterschaft (U18)",
            time: "2017",
            place: "Larnaka, Zypern",
            placement: "3. Platz",
            description: [],
            image: "assets/competitions/2017/em-u18.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Luxembourg Open",
            time: "2017",
            place: "Luxemburg, Luxemburg",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2017/lux-open.jpg",
            alt: "",
            buttons: []
        },
        {
            title: "Deutsche Meisterschaft (U21)",
            time: "2017",
            place: "Ochsenhausen, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2017/dm-u21.webp",
            alt: "",
            buttons: []
        },
        {
            title: "Europa meisterschaft (U21)",
            time: "2017",
            place: "Sofia, Bulgarien",
            placement: "Teilnahme",
            description: [],
            image: "assets/competitions/2017/em-u21.webp",
            alt: "",
            buttons: [],
            credits: "Foto: Europäische Taekwondo Union (ETU)"
        },
        {
            title: "Deutsche Meisterschaft",
            time: "2017",
            place: "Ingolstadt, Deutschland",
            placement: "1. Platz",
            description: [],
            image: "assets/competitions/2017/dm.jpg",
            alt: "",
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

                <h2>Erfolge 2020 und 2021</h2>
                <div id="competition-container-main">
                    {competitions2021.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>

                <h2>Erfolge 2019</h2>
                <div id="competition-container-main">
                    {competitions2019.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>

                <h2>Erfolge 2018</h2>
                <div id="competition-container-main">
                    {competitions2018.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>

                <h2>Erfolge 2017</h2>
                <div id="competition-container-main">
                    {competitions2017.map((competition, index) => (
                        <CompetitionCard key={index} competition={competition} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SectionSports;