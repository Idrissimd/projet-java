
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    searchInput.addEventListener("input", async function () {
        const query = searchInput.value.trim();

        if (query.length > 0) {
            try {
                const searchResults = await performSearch(query);
                displaySearchResults(searchResults);
            } catch (error) {
                console.error("Erreur lors de la recherche :", error);
            }
        } else {
            searchResultsContainer.innerHTML = "";}
    });

    // pour la recherche
    async function performSearch(query) {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUxOTY2MDA5MTNlNzBhNjYzOTAyNDc0YmU4MzdjOSIsInN1YiI6IjY1YWZjNDFjODQ4ZWI5MDEwYTlhNzViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmIGwMOirRInJH7xPwuUl4ZyUk6D8ZmbBWaqX4XYRc'

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUxOTY2MDA5MTNlNzBhNjYzOTAyNDc0YmU4MzdjOSIsInN1YiI6IjY1YWZjNDFjODQ4ZWI5MDEwYTlhNzViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmIGwMOirRInJH7xPwuUl4ZyUk6D8ZmbBWaqX4XYRc'
              
            }
          };
          
          fetch('https://api.themoviedb.org/3/search/keyword?query=aqu', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        try {
            //encodeURIComponent pour les caractères spéciaux dans l'URL
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&page=1&api_key=${apiKey}`, options);

            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }

            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Erreur lors de la récupération des résultats de recherche :", error);
            return []; 
        }
    }

    function displaySearchResults(results) {
        searchResultsContainer.innerHTML = ""; // Effacé les rstls

        if (results.length > 0) {
            results.forEach((movie) => {
                // article(film)
                const movieArticle = document.createElement("article");

                movieArticle.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <p>Date de sortie : ${movie.release_date || "Non disponible"}</p>
                    <a href="movie.html?id=${movie.id}">En savoir plus</a>`;

                // Ajouter l'article à la liste des résultats
                searchResultsContainer.appendChild(movieArticle);
            });
        } else {
            // Aucun résultat trouvé
            searchResultsContainer.innerHTML = "Aucun résultat trouvé.";
        }
    }
});
