function createHamburgerMenu() {
    const container = document.getElementById("hamburger-menu-container");

    // create container
    const bar = document.createElement("div");
    bar.classList.add("hamburger-bar");

    // create hamburger icon
    const hamburgerIcon = document.createElement("span");
    hamburgerIcon.classList.add("hamburger-icon");
    hamburgerIcon.innerHTML = "&#9776;"; // hamburger icon
    hamburgerIcon.onclick = makeDropdownVisible; // open dropdown when icon is clicked
    bar.appendChild(hamburgerIcon);

    // create dropdown menue container
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");

    // navigation
    const links = [
        { text: "About", href: "#about" },
        { text: "Education", href: "#education" },
        { text: "Experience", href: "#experience" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Sports", href: "#sports" },
        { text: "Hobbies", href: "#hobbies" },
        { text: "Contact", href: "#contact" }
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        a.onclick = () => makeDropdownVisible(); 

        dropdownMenu.appendChild(a);
    });

    bar.appendChild(dropdownMenu);
    container.appendChild(bar);

    // close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        const isClickInside = bar.contains(e.target); 
        const dropdown = dropdownMenu; 

        if (!isClickInside && dropdown.classList.contains("active")) {
            dropdown.classList.remove("active");
        }
    });
}

// make dropdown visible
function makeDropdownVisible() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("active");
}

createHamburgerMenu();