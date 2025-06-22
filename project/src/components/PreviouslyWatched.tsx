import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { Movie } from '../types/Movie';
import MovieCard from './MovieCard';

interface PreviouslyWatchedProps {
  watchedMovies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const PreviouslyWatched: React.FC<PreviouslyWatchedProps> = ({ watchedMovies, onMovieClick }) => {
  if (watchedMovies.length === 0) {
    return (
      <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
        <div className="text-center">
          <Clock className="h-12 w-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">No movies watched yet</h3>
          <p className="text-gray-500">Click on any movie to start building your watch history</p>
        </div>
      </div>
    );
  }

  const genreStats = watchedMovies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const favoriteGenre = Object.entries(genreStats).sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Previously Watched</h2>
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            {watchedMovies.length} movies
          </span>
        </div>
        
        {favoriteGenre && (
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <TrendingUp className="h-4 w-4" />
            <span>Your favorite genre: </span>
            <span className="text-blue-400 font-medium">{favoriteGenre[0]}</span>
            <span>({favoriteGenre[1]} movies)</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchedMovies.slice(0, 12).map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard
                movie={movie}
                onMovieClick={onMovieClick}
                isWatched={true}
              />
            </div>
          ))}
        </div>
        
        {watchedMovies.length > 12 && (
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-400">
              and {watchedMovies.length - 12} more movies...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviouslyWatched;