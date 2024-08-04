const apiKey = 'dd0b0d04ab63dabc1854abf49c36e471';
const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieGrid = document.getElementById('movie-grid');
            const movies = data.results;

            movies.forEach(movie => {
                const moviePoster = document.createElement('div');
                moviePoster.className = 'movie-poster';
                moviePoster.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                `;
                movieGrid.appendChild(moviePoster);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
