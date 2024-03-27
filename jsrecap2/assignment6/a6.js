'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const num = prompt('How many movies?');
  const movies = [];

  const sortByRating = (a, b) => b.rating - a.rating;

  for (let i = 0; i < num; i++) {
    const title = prompt('Title?');
    const rating = +prompt('Rating? (1-5)');
    const movie = {
      title: title,
      rating: rating,
    };
    movies.push(movie);
  }

  movies.sort(sortByRating);

  const moviesList = document.getElementById('moviesList');

  for (const movie of movies) {
    const listItem = document.createElement('li');
    listItem.textContent = `${movie.title}, ${movie.rating}`;
    moviesList.appendChild(listItem);
  }
});
