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
        card.classList.add("card");

        // add content
        const institutionWrapper = document.createElement("div");
        institutionWrapper.classList.add("institution-wrapper");

        const institution = document.createElement("h2");
        institution.textContent = event.institution;
        institution.classList.add("institution-text");

        const image = document.createElement("img");
        image.src = event.image;
        image.classList.add("institution-image");

        const educationInfo = document.createElement("h4");
        educationInfo.textContent = event.educationInfo;

        const dateAndPlace = document.createElement("div");
        dateAndPlace.classList.add("info-container");

        // date with icon
        const dateWrapper = document.createElement("div");
        dateWrapper.classList.add("info-wrapper");

        const dateIcon = document.createElement("img");
        dateIcon.src = "assets/icons/calendar.svg";
        dateIcon.classList.add("icon");

        const date = document.createElement("span");
        date.classList.add("info");
        date.textContent = event.date;

        dateWrapper.appendChild(dateIcon);
        dateWrapper.appendChild(date);

        // place with icon
        const placeWrapper = document.createElement("div");
        placeWrapper.classList.add("info-wrapper");

        const placeIcon = document.createElement("img");
        placeIcon.src = "assets/icons/location.svg";
        placeIcon.classList.add("icon");

        const place = document.createElement("span");
        place.classList.add("info");
        place.textContent = event.place;

        const description = document.createElement("p");
        description.textContent = event.description;

        const description2 = document.createElement("p");
        description2.textContent = event.description2;

        institutionWrapper.appendChild(institution)
        institutionWrapper.appendChild(image)

        placeWrapper.appendChild(placeIcon);
        placeWrapper.appendChild(place);

        dateAndPlace.appendChild(dateWrapper);
        dateAndPlace.appendChild(placeWrapper);

        card.appendChild(institutionWrapper);
        card.appendChild(educationInfo);
        card.appendChild(dateAndPlace);
        card.appendChild(description);
        card.appendChild(description2);

        item.appendChild(dot);
        item.appendChild(card);

        education.appendChild(item);
    });

    container.appendChild(education);
}

// add information
const educationEvents = [
    {
        institution: "Georg-Simon-Ohm Hochschule",
        image: "./assets/images/education/ohm.png",
        educationInfo: "Bachelor: Computer Science",
        date: "2019-2021",
        place: "Nuremberg, Germany",
        description: "During my studies, I explored a wide range of modules, including programming, software engineering, architecture, databases, and security. Alongside my academic learning, I worked on various project-based tasks, such as developing chatbots, working with image and video processing, web programming, and language processing, among others.",
        description2: "I will graduate in the spring of 2025 and have completed my bachelor's thesis, where I developed a prototype to automatically extract individual fights from a taekwondo livestream.",
    },
    {
        institution: "Georg-Simon-Ohm Hochschule",
        image: "./assets/images/education/ohm.png",
        educationInfo: "Bachelor: Media Engineering",
        date: "10/2019-03/2021",
        place: "Nuremberg, Germany",
        description: "Since I was young, I have been very interested in both science and the arts. For that reason, I decided to study Media Engineering, a creative mix of Computer Science and Design. There, I learned the basics of programming, with a focus on game development.",
        description2: "I also discovered that I enjoy programming much more than the design aspect of the course. After two semesters, I decided to switch to the Computer Science department at my university.F",
    },
    {
        institution: "Hans Sachs Gymnasium",
        image: "./assets/images/education/hsg.png",
        educationInfo: "Abitur",
        date: "09/2011-07/2019",
        place: "Nuremberg, Germany",
        description: "",
        description2: "",
    },
];

createEducation(educationEvents);