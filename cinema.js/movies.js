
/*document.addEventListener("DOMContentLoaded", function () {

    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUxOTY2MDA5MTNlNzBhNjYzOTAyNDc0YmU4MzdjOSIsInN1YiI6IjY1YWZjNDFjODQ4ZWI5MDEwYTlhNzViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmIGwMOirRInJH7xPwuUl4ZyUk6D8ZmbBWaqX4XYRc';

    //obtention des films en tendance
    async function getTrendingMovies() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            };
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)/*(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`, options);*/
            /*if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Erreur lors de la récupération des films en tendance :", error);
        }
    }


    // afficher les films 
    async function displayTrendingMovies() {
        const trendingMovies = await getTrendingMovies();

        if (trendingMovies && trendingMovies.length > 0) {
            const filmContainer = document.querySelector(".film");

            if (filmContainer) {
                trendingMovies.forEach(movie => {
                    // Créer un élément article pour chaque film
                    const movieArticle = document.createElement("article");

                    // 
                    movieArticle.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                        <p>Date de sortie : ${movie.release_date}</p>
                        <a href="http://127.0.0.1:5500/movie.html?id=${movie.id}">En savoir plus</a>
                    `;

                    // Ajouter l'article à la liste des résultats
                    filmContainer.appendChild(movieArticle);
                });
            
            } else {
                console.error("Le conteneur de films est introuvable.");
            }
        }
            else {
            console.log("Aucun film en tendance trouvé.");
        }
    }

    displayTrendingMovies();

    async function getmovieinformation(movieId) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        };

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération des informations du film :", error);
        }
    }

    async function displayMovieDetails() {
        const movieId = getIdMovie();

        if (!movieId) {
            console.error("ID du film non trouvé.");
            return;
        }

        const movieInfo = await getmovieinformation(movieId);

        if (movieInfo) {
            document.getElementById('movieImg').src = `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`;
            document.getElementById("movie-title").textContent = movieInfo.original_title;
            document.getElementById("movie-summary").textContent = movieInfo.overview;
        } else {
            console.log("Aucune information de film trouvée.");
        }
    }

    displayMovieDetails();



       function getIdMovie() {
            const urlParams = new URLSearchParams(window.location.search);
            const movieId = urlParams.get("id");
            return movieId;
        }

        async function getMoviescomment(movieId) {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${apiKey}`
                    }
                };
                
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-us&page=1`, options);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                }
                const data = await response.json();
                return data.results;
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires :", error);
            }
        }
        
        async function displayMovieComments() {
            const movieId = getIdMovie();
        
            if (!movieId) {
                console.error("ID du film non trouvé.");
                return;
            }
        
            const movieComments = await getMoviescomment(movieId);
        
            if (movieComments && movieComments.length > 0) {
                const commentsContainer = document.getElementById('comments');
        
                movieComments.forEach(comment => {
                   
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
        
                    const authorName = document.createElement('p');
                    authorName.textContent = comment.author;
                    commentElement.appendChild(authorName);
 
                    const commentContent = document.createElement('p');
                    commentContent.textContent = comment.content;
                    commentElement.appendChild(commentContent);

                    const createdAt = document.createElement('p');
                    createdAt.textContent = `Créé le : ${comment.created_at}`;
                    commentElement.appendChild(createdAt);

                    const authorDetails = document.createElement('div');
                    authorDetails.classList.add('author-details');
    
                    const avatarImg = document.createElement('img');
                    avatarImg.src = `https://image.tmdb.org/t/p/w500/${comment.author_details.avatar_path}`
                    avatarImg.alt = 'Avatar de l\'auteur';
                    authorDetails.appendChild(avatarImg);
        
                    commentElement.appendChild(authorDetails);

                    commentsContainer.appendChild(commentElement);
                });
            } else {
                console.log("Aucun commentaire trouvé.");
            }
        }  
    displayMovieComments();
 

});*/




document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUxOTY2MDA5MTNlNzBhNjYzOTAyNDc0YmU4MzdjOSIsInN1YiI6IjY1YWZjNDFjODQ4ZWI5MDEwYTlhNzViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmIGwMOirRInJH7xPwuUl4ZyUk6D8ZmbBWaqX4XYRc';

    // Fonction pour obtenir les films en tendance
    async function getTrendingMovies(page) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            };
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=fr-FR&page=${page}`, options);
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Erreur lors de la récupération des films en tendance :", error);
        }
    }

    // Fonction pour afficher les films
    async function displayTrendingMovies(page) {
        const trendingMovies = await getTrendingMovies(page);

        if (trendingMovies && trendingMovies.length > 0) {
            const filmContainer = document.querySelector(".film");

            if (filmContainer) {
                trendingMovies.forEach(movie => {
                    //article pour chaque film
                    const movieArticle = document.createElement("article");

                    // Contenu de l'article
                    movieArticle.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                        <p>Date de sortie : ${movie.release_date}</p>
                        <a href="http://127.0.0.1:5500/movie.html?id=${movie.id}">En savoir plus</a>
                    `;

                    // Ajouter l'article à la liste des résultats
                    filmContainer.appendChild(movieArticle);
                });
            } else {
                console.error("Le conteneur de films est introuvable.");
            }
        } else {
            console.log("Aucun film en tendance trouvé.");
        }
    }

    // Afficher les films au chargement de la page
    let currentPage = 1;
    displayTrendingMovies(currentPage);
    
    // scrol+
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5 && currentPage < 100) {
            currentPage++;
            displayTrendingMovies(currentPage);
        }
    });
    async function getmovieinformation(movieId) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        };

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`, options);
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération des informations du film :", error);
        }
    }

    async function displayMovieDetails() {
        const movieId = getIdMovie();

        if (!movieId) {
            console.error("ID du film non trouvé.");
            return;
        }

        const movieInfo = await getmovieinformation(movieId);

        if (movieInfo) {
            document.getElementById('movieImg').src = `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`;
            document.getElementById("movie-title").textContent = movieInfo.original_title;
            document.getElementById("movie-summary").textContent = movieInfo.overview;
        } else {
            console.log("Aucune information de film trouvée.");
        }
    }

    displayMovieDetails();



       function getIdMovie() {
            const urlParams = new URLSearchParams(window.location.search);
            const movieId = urlParams.get("id");
            return movieId;
        }

        async function getMoviescomment(movieId) {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${apiKey}`
                    }
                };
                
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-us&page=1`, options);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                }
                const data = await response.json();
                return data.results;
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires :", error);
            }
        }
        
        async function displayMovieComments() {
            const movieId = getIdMovie();
        
            if (!movieId) {
                console.error("ID du film non trouvé.");
                return;
            }
        
            const movieComments = await getMoviescomment(movieId);
        
            if (movieComments && movieComments.length > 0) {
                const commentsContainer = document.getElementById('comments');
        
                movieComments.forEach(comment => {
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    const authorName = document.createElement('p');
                    authorName.textContent = comment.author;
                    commentElement.appendChild(authorName);
                    const commentContent = document.createElement('p');
                    commentContent.textContent = comment.content;
                    commentElement.appendChild(commentContent);
                    const createdAt = document.createElement('p');
                    createdAt.textContent = `Créé le : ${comment.created_at}`;
                    commentElement.appendChild(createdAt);
                    const authorDetails = document.createElement('div');
                    authorDetails.classList.add('author-details');
                    const avatarImg = document.createElement('img');
                    avatarImg.src = `https://image.tmdb.org/t/p/w500/${comment.author_details.avatar_path}`
                    avatarImg.alt = 'Avatar de l\'auteur';
                    authorDetails.appendChild(avatarImg);
                    commentElement.appendChild(authorDetails);
                    commentsContainer.appendChild(commentElement);
                });
            } else {
                console.log("Aucun commentaire trouvé.");
            }
        }  
    displayMovieComments();
 


});
