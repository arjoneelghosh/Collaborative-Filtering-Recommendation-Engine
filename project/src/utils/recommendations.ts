import { Movie, RecommendationWithScore, Genre } from '../types/Movie';
import { movies, getRandomRelevanceScore } from '../data/movies';

const generateReason = (m: Movie, clicked: Movie): string => {
  if (m.genre === clicked.genre) return `Same genre: ${m.genre}`;
  if (m.mainActor === clicked.mainActor) return `Same actor: ${m.mainActor}`;
  if (m.director === clicked.director) return `Same director: ${m.director}`;
  return `Relevant match`;
};

export const generateRecommendations = (
  clickedMovie: Movie,
  watchedMovies: Movie[]
): RecommendationWithScore[] => {
  const watchedGenres = [...new Set(watchedMovies.map(m => m.genre))];

  let recommendations: RecommendationWithScore[] = [];

  const excludeIds = new Set([
    clickedMovie.id,
    ...watchedMovies.map(m => m.id)
  ]);

  const isNotWatched = (movie: Movie) => !excludeIds.has(movie.id);

  if (watchedGenres.length === 1) {
    // Simple case: recommend 3 from same genre
    const sameGenreMovies = movies.filter(
      m => m.genre === clickedMovie.genre && isNotWatched(m)
    );

    recommendations = sameGenreMovies
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(movie => ({
        movie,
        relevanceScore: getRandomRelevanceScore(),
        reason: `Same genre: ${movie.genre}`
      }));
  } else {
    const sameActor = movies.find(
      m => m.mainActor === clickedMovie.mainActor && isNotWatched(m)
    );

    const sameDirector = movies.find(
      m =>
        m.director === clickedMovie.director &&
        isNotWatched(m) &&
        m.id !== (sameActor?.id ?? "")
    );

    const genreFallback = movies
      .filter(
        m =>
          m.genre === clickedMovie.genre &&
          isNotWatched(m) &&
          m.id !== (sameActor?.id ?? "") &&
          m.id !== (sameDirector?.id ?? "")
      )
      .sort((a, b) => b.rating - a.rating)[0];

    const final = [sameActor, sameDirector, genreFallback]
      .filter(Boolean)
      .slice(0, 3)
      .map((movie: Movie) => ({
        movie,
        relevanceScore: getRandomRelevanceScore(),
        reason: generateReason(movie, clickedMovie)
      }));

    recommendations = final;
  }

  return recommendations;
};