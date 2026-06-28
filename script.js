fetch("data/movies.json")
  .then(res => res.json())
  .then(movies => {
    const container = document.getElementById("movie-list");

    movies.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";

      card.innerHTML = `
        <h2>${movie.title} (${movie.year})</h2>
        <p>${movie.genre} • ${movie.runtime} min</p>
        <p>${movie.description}</p>
      `;

      container.appendChild(card);
    });
  });
