function createEducation(events) {
    const container = document.getElementById("education-container");

    const education = document.createElement("div");
    education.classList.add("education");

    events.forEach(event => {
        // create an education item
        const item = document.createElement("div");
        item.classList.add("education-item");

        // create the dot
        const dot = document.createElement("div");
        dot.classList.add("education-dot");

        // create the card
        const card = document.createElement("div");
        card.classList.add("education-card");

        // add content
        const institution = document.createElement("h2");
        institution.textContent = event.institution;

        const educationInfo = document.createElement("h4");
        educationInfo.textContent = event.educationInfo;


        const dateAndPlace = document.createElement("div");
        dateAndPlace.classList.add("education-info-container");

        const date = document.createElement("span");
        date.classList.add("education-info");
        date.textContent = event.date;

        const place = document.createElement("span");
        place.classList.add("education-info");
        place.textContent = event.place;

        dateAndPlace.appendChild(date);
        dateAndPlace.appendChild(place);

        card.appendChild(institution);
        card.appendChild(educationInfo);
        card.appendChild(dateAndPlace);

        item.appendChild(dot);
        item.appendChild(card);

        education.appendChild(item);
    });

    container.appendChild(education);
}

// add information
const educationEvents = [
    { institution: "Georg-Simon-Ohm Hochschule", educationInfo: "Bachelors in Computer Science", date: "2019-Present", place: "Nuremberg, Germany" },
    { institution: "Hans Sachs Gymnasium", educationInfo: "Abitur", date: "2011-2019", place: "Nuremberg, Germany" },
];

createEducation(educationEvents);