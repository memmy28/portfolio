function createSidebar() {
    const sidebarContainer = document.getElementById("sidebar-container");

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const links = [
        { text: "About", href: "#about" },
        { text: "Education", href: "#education" },
        { text: "Experience", href: "#experience" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Sports Carreer", href: "#sports" },
        { text: "Hobbies", href: "#hobbies" },
        { text: "Contact", href: "#contact" }
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        sidebar.appendChild(a);
    });

    sidebarContainer.appendChild(sidebar);
}

createSidebar();