import React from 'react';
import { Movie } from '../types/Movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
  watchedMovies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick, watchedMovies }) => {
  const isWatched = (movie: Movie) => watchedMovies.some(watched => watched.id === movie.id);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={onMovieClick}
          isWatched={isWatched(movie)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;