const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        image: "portfolio.jpg",
        date: "Jan 2024",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "A personal portfolio website to showcase my work and skills.",
        link: "#"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        image: "ecommerce.jpg",
        date: "Feb 2024",
        languages: ["Node.js", "Express", "MongoDB"],
        description: "A fully functional e-commerce platform with payment integration.",
        link: "#"
    }
];

function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;
    image.className = "project-image";
    card.appendChild(image);

    const date = document.createElement("p");
    date.className = "project-date";
    date.textContent = project.date;
    card.appendChild(date);

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;
    card.appendChild(title);

    const languageContainer = document.createElement("div");
    languageContainer.className = "project-languages";
    project.languages.forEach(lang => {
        const langSpan = document.createElement("span");
        langSpan.className = "language-tag";
        langSpan.textContent = lang;
        languageContainer.appendChild(langSpan);
    });
    card.appendChild(languageContainer);

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;
    card.appendChild(description);

    const link = document.createElement("a");
    link.href = project.link;
    link.className = "project-link";
    link.textContent = "More Details";
    card.appendChild(link);

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");
    projects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
});