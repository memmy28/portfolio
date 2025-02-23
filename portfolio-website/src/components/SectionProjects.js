import React from 'react'
import ProjectCard from "./ComponentCards";
import "../style/section-projects.css"

const SectionProjects = () => {
    const projects = [
        {
            title: "Random Project",
            time: "2024",
            place: "Nbg",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor",
            image: "assets/foto.jpg",
            alt: "Alt",
            labels: ["Python", "VS Code"],
            buttons: [
                { text: "Download Projects", href: "assets/cv.pdf", target: "_blank", download: true },
                { text: "Read more", href: "#contact", target: "_self", download: false },
            ]
        },
        {
            title: "Random Project 2",
            time: "2025",
            place: "Erlangen",
            description: "Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero e",
            image: "assets/foto.jpg",
            alt: "Alt 2",
            labels: ["HTML", "CSS", "React", "JavaScipt"],
            buttons: [
                { text: "Download Projects 2", href: "assets/cv.pdf", target: "_blank", download: true },
                { text: "Read more 2", href: "#contact", target: "_self", download: false },
            ]
        },
    ];

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div id="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default SectionProjects;