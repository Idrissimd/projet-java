const ssoTmdbReadApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzUxOTY2MDA5MTNlNzBhNjYzOTAyNDc0YmU4MzdjOSIsInN1YiI6IjY1YWZjNDFjODQ4ZWI5MDEwYTlhNzViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmIGwMOirRInJH7xPwuUl4ZyUk6D8ZmbBWaqX4XYRc';

// verifie si token present
window.onload = async () => {
    if (sessionStorage.getItem('tmdbsessionId') !== null) {
        document.getElementById("décobutton").style.display = "block";
        document.getElementById("redirectssobutton").style.display = "none";
    } else {
        document.getElementById("décobutton").style.display = "none";
        document.getElementById("redirectssobutton").style.display = "block";
    }

    if (!location.search.includes('request_token=')) {
        return;
    }

    let token = location.search.split('request_token=')[1]?.split('&')?.[0];

    if (token) {
        getSession(token)
            .then(sessionData => {
                // Stocke les informations de session
                sessionStorage.setItem('tmdbsessionId', sessionData.session_id);
                sessionStorage.setItem('tmdbsessionToken', token);
                // Recharge la page
                location.href = 'http://127.0.0.1:5500';
            })
            .catch(err => {
                console.error(err);
                location.href = 'http://127.0.0.1:5500';
            });
    }
}


//  vérifie qu'un token existe 
async function redirectUserToSSO() {
    let tokenData = await getNewToken();
    if (!tokenData.success) {
        return alert('Une erreur est survenue et je ne peux pas vous identifier');
    }
    location.href = `https://www.themoviedb.org/authenticate/${tokenData.request_token}?redirect_to=http://127.0.0.1:5500`;
}

// requête à TMDB pour obtenir un token vierge
async function getNewToken() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ssoTmdbReadApiKey}`
        }
    };

    let tokenRequest = await fetch('https://api.themoviedb.org/3/authentication/token/new', options).catch(err => console.error('error:' + err));
    if (!tokenRequest) {
        return;
    }

    let tokenData = await tokenRequest.json();

    return tokenData;
}

// requête à TMDB pour obtenir une nouvelle session d'authentification
async function getSession(token) {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${ssoTmdbReadApiKey}`
        },
        body: JSON.stringify({request_token: token})
    };

    let sessionRequest = await fetch('https://api.themoviedb.org/3/authentication/session/new', options).catch(err => console.error('error:' + err));
    if (!sessionRequest) {
        return;
    }

    let sessionData = await sessionRequest.json();

    return sessionData;
}

//pour ce déconnecter
async function déconnexion() {
    // Supprime les informations de session du stockage de session
    sessionStorage.removeItem('tmdbsessionId');
    sessionStorage.removeItem('tmdbsessionToken');
    // Redirige vers la page d'accueil
    location.href = "http://127.0.0.1:5500";
}





//ssoTmdbReadApiKey: C'est une clé d'API utilisée pour authentifier les requêtes à l'API TMDB.
//Fonctions:
//1. redirectUserToSSO:
//Cette fonction est appelée pour rediriger l'utilisateur vers la page d'authentification de TMDB.
//Elle appelle la fonction getNewTMDBToken pour obtenir un nouveau jeton d'authentification TMDB.
//Si la requête réussit, l'utilisateur est redirigé vers une URL de TMDB avec le nouveau jeton d'authentification.
//2. getNewTMDBToken:
//:Cette fonction effectue une requête à l'API TMDB pour obtenir un nouveau jeton d'authentification.
//Elle utilise la clé d'API (ssoTmdbReadApiKey) dans les en-têtes pour authentifier la requête.
//La fonction renvoie les données du jeton obtenues en réponse à la requête.
//3. getNewSession(token):
//Cette fonction prend un jeton en paramètre et effectue une requête à l'API TMDB pour créer une nouvelle session d'authentification.
//Elle utilise le jeton passé en paramètre dans le corps de la requête et la clé d'API dans les en-têtes pour authentifier la requête.
//La fonction renvoie les données de session obtenues en réponse à la requête.
//4. window.onload:
//Cette partie du code est exécutée lorsque la fenêtre est complètement chargée.
//Elle vérifie si le paramètre de recherche de l'URL contient la chaîne 'request_token='.
//Si c'est le cas, elle extrait le jeton de la chaîne de recherche, appelle getNewSession pour créer une nouvelle session, stocke certaines informations dans la session du navigateur et recharge la page.
//Comment cela fonctionne:
//Lorsque la page est chargée, le code vérifie si un jeton est présent dans l'URL.
//:Si un jeton est trouvé, il est utilisé pour créer une nouvelle session en appelant l'API TMDB.
//Les données de session sont stockées dans la session du navigateur, et la page est rechargée.
//Si aucun jeton n'est trouvé dans l'URL, la page reste inchangée.
//Il y a également une fonction (redirectUserToSSO) qui peut être appelée pour rediriger l'utilisateur vers la page d'authentification de TMDB.
//Ce code semble être une implémentation de l'authentification à l'aide de tokens avec l'API TMDB dans le contexte d'une application web.