const teams = [
    {
        name: "Al Ahly",
        description: "Al Ahly is an Egyptian football club, founded in 1907, with a rich history and the most successful football club in Africa.",
        link: "ahly.html" // رابط صفحة "Al Ahly"
    },
    {
        name: "Zamalek",
        description: "Zamalek SC is a prominent Egyptian football club founded in 1911.",
        link: "zamalek.html" // رابط صفحة "Zamalek"
    },
    {
        name: "Barcelona",
        description: "FC Barcelona is a Spanish professional football club.",
        link: "barcelona.html" // رابط صفحة "Barcelona"
    },
    {
        name: "Real Madrid",
        description: "Real Madrid is a professional football club in Spain, one of the most successful clubs in the world.",
        link: "real_madrid.html" // رابط صفحة "Real Madrid"
    },
    {
        name: "Liverpool",
        description: "Liverpool FC is a famous English football club with a rich history in both domestic and international football.",
        link: "liverpool.html" // رابط صفحة "Liverpool"
    },
    {
        name: "Al Nassr",
        description: "Al Nassr is a professional football club in Saudi Arabia, known for being one of the top teams in the country.",
        link: "al_nassr.html" // رابط صفحة "Al Nassr"
    },
    {
        name: "Al Hilal",
        description: "Al Hilal is one of the most successful football clubs in Saudi Arabia, with numerous national and international trophies.",
        link: "al_hilal.html" // رابط صفحة "Al Hilal"
    },
    {
        name: "Manchester United",
        description: "Manchester United is an English football club with a rich history in both the Premier League and European competitions.",
        link: "manun.html" // رابط صفحة "Manchester United"
    },
    {
        name: "Manchester City",
        description: "Manchester City is an English football club, currently one of the most successful clubs in the Premier League.",
        link: "mancity.html" // رابط صفحة "Manchester City"
    },
    {
        name: "Paris Saint Germain",
        description: "paris.",
        link: "psg.html" // رابط صفحة "Manchester City"
    },
    {
        name: "Bayern Munich",
        description: ".",
        link: "bayern.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Borussia Dortmund",
        description: ".",
        link: "bvb.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Chelsea",
        description: ".",
        link: "chelsea.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Inter Millan",
        description: ".",
        link: "inter.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Ac Millan",
        description: ".",
        link: "ac.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Pyramids",
        description: ".",
        link: "pr.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Arsenal",
        description: ".",
        link: "arsenal.html" // رابط صفحة "Manchester City"
    }
    ,
    {
        name: "Tottenham",
        description: ".",
        link: "tot.html" // رابط صفحة "Manchester City"
    }
];

// وظيفة الاقتراحات أثناء الكتابة
document.getElementById("searchInput").addEventListener("input", function() {
    const searchInput = this.value.toLowerCase();
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = ""; // مسح أي اقتراحات سابقة

    if (searchInput) {
        const filteredTeams = teams.filter(t => t.name.toLowerCase().includes(searchInput));
        filteredTeams.forEach(team => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = team.name;
            suggestionItem.addEventListener("click", function() {
                document.getElementById("searchInput").value = team.name;
                window.location.href = team.link; // التوجيه إلى الصفحة الخاصة بالفريق
                suggestionsList.innerHTML = ""; // مسح الاقتراحات بعد الاختيار
            });
            suggestionsList.appendChild(suggestionItem);
        });
    }
});
