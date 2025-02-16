function createCard(title, content) {
    const template = document.getElementById("card-template");
    const clone = template.content.cloneNode(true);
    
    clone.querySelector("h2").textContent = title;
    clone.querySelector("p").textContent = content;

    document.getElementById("card-container").appendChild(clone);
}

// create cards 
createCard("Card 1", "This is the first card.");
createCard("Card 2", "This is the second card.");
createCard("Card 3", "This is the third card.");
createCard("Card 4", "This is the fouth card.");
createCard("Card 5", "This is the fifth card.");
createCard("Card 6", "This is the sixth card.");
createCard("Card 7", "This is the seventh card.");