const teams = [
    {
        name: "Al Ahly",
        description: "Al Ahly is an Egyptian football club, founded in 1907, with a rich history and the most successful football club in Africa.",
        link: "ahly.html"
    },
    {
        name: "Zamalek",
        description: "Zamalek SC is a prominent Egyptian football club founded in 1911.",
        link: "zamalek.html"
    },
    {
        name: "Barcelona",
        description: "FC Barcelona is a Spanish professional football club.",
        link: "barcelona.html"
    },
    {
        name: "Real Madrid",
        description: "Real Madrid is a professional football club in Spain, one of the most successful clubs in the world.",
        link: "real_madrid.html"
    },
    {
        name: "Liverpool",
        description: "Liverpool FC is a famous English football club with a rich history in both domestic and international football.",
        link: "liverpool.html"
    },
    {
        name: "Al Nassr",
        description: "Al Nassr is a professional football club in Saudi Arabia, known for being one of the top teams in the country.",
        link: "al_nassr.html"
    },
    {
        name: "Al Hilal",
        description: "Al Hilal is one of the most successful football clubs in Saudi Arabia, with numerous national and international trophies.",
        link: "al_hilal.html"
    },
    {
        name: "Manchester United",
        description: "Manchester United is an English football club with a rich history in both the Premier League and European competitions.",
        link: "manun.html"
    },
    {
        name: "Manchester City",
        description: "Manchester City is an English football club, currently one of the most successful clubs in the Premier League.",
        link: "mancity.html"
    },
    {
        name: "Paris Saint Germain",
        description: "Paris Saint Germain is a French football club.",
        link: "psg.html"
    },
    // أضف باقي الفرق بنفس الطريقة
];

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    if (query) {
        const filteredTeams = teams.filter(team => team.name.toLowerCase().includes(query));
        filteredTeams.forEach(team => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = team.name;
            suggestionItem.onclick = function() {
                window.location.href = team.link; // توجيه المستخدم إلى صفحة الفريق
            };
            suggestionsBox.appendChild(suggestionItem);
        });
        suggestionsBox.style.display = filteredTeams.length > 0 ? 'block' : 'none';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Hide suggestions when clicking outside the input or suggestions box
document.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
        suggestionsBox.style.display = 'none';
    }
});
