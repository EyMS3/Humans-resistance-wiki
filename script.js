const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchWiki() {

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        searchResult.textContent =
            "Please enter something to search.";
        return;
    }

    const pages = [

        {
            name: "Character 1",
            keywords: ["character 1"],
            link: "character.html"
        },

        {
            name: "Slime",
            keywords: ["slime"],
            link: "slime.html"
        },

        {
            name: "Mankurt",
            keywords: ["mankurt"],
            link: "mankurt.html"
        },

        {
            name: "Drone",
            keywords: ["drone"],
            link: "drone.html"
        },

        {
            name: "Entity",
            keywords: ["entity"],
            link: "entity.html"
        },

        {
            name: "Cyber Machine",
            keywords: ["cyber machine"],
            link: "cyber-machine.html"
        },

        {
            name: "Guard",
            keywords: ["guard"],
            link: "guard.html"
        },

        {
            name: "Bomber",
            keywords: ["bomber"],
            link: "bomber.html"
        },

        {
            name: "Charger",
            keywords: ["charger"],
            link: "charger.html"
        }

    ];

    let found = null;

    for (const page of pages) {

        for (const keyword of page.keywords) {

            if (
                keyword.includes(query) ||
                query.includes(keyword)
            ) {
                found = page;
                break;
            }

        }

        if (found) {
            break;
        }
    }

    if (found) {

        searchResult.innerHTML =
            `<a href="${found.link}">
                ${found.name} found! →
            </a>`;

    } else {

        searchResult.textContent =
            "No results found.";

    }
}


searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchWiki();
    }

});