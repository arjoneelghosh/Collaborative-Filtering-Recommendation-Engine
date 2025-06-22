import React from 'react';
import { X, TrendingUp, Star } from 'lucide-react';
import { Movie, RecommendationWithScore } from '../types/Movie';
import MovieCard from './MovieCard';

interface RecommendationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMovie: Movie | null;
  recommendations: RecommendationWithScore[];
  onMovieClick: (movie: Movie) => void;
  watchedMovies: Movie[];
}

const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  isOpen,
  onClose,
  selectedMovie,
  recommendations,
  onMovieClick,
  watchedMovies
}) => {
  if (!isOpen || !selectedMovie) return null;

  const isWatched = (movie: Movie) => watchedMovies.some(watched => watched.id === movie.id);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`relative ml-auto w-full max-w-2xl bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Recommendations</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Selected Movie */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">You watched:</h3>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="flex space-x-4">
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-20 h-30 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-bold text-white mb-1">{selectedMovie.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{selectedMovie.rating}</span>
                      <span>•</span>
                      <span>{selectedMovie.year}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
                        {selectedMovie.genre}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{selectedMovie.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recommendations */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Based on your preferences:</h3>
              <div className="space-y-6">
                {recommendations.map((rec, index) => (
                  <div key={rec.movie.id} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          #{index + 1}
                        </div>
                        <div>
                          <div className="text-sm text-blue-400 font-medium">
                            {rec.relevanceScore}% Match
                          </div>
                          <div className="text-xs text-gray-400">{rec.reason}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => onMovieClick(rec.movie)}
                      className="cursor-pointer hover:bg-gray-700/30 rounded-lg p-3 transition-colors"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={rec.movie.poster}
                          alt={rec.movie.title}
                          className="w-16 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-1 hover:text-blue-400 transition-colors">
                            {rec.movie.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{rec.movie.rating}</span>
                            <span>•</span>
                            <span>{rec.movie.year}</span>
                            <span>•</span>
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                              {rec.movie.genre}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 line-clamp-2">{rec.movie.description}</p>
                          <div className="mt-2 text-xs text-gray-400">
                            <div>Actor: {rec.movie.mainActor}</div>
                            <div>Director: {rec.movie.director}</div>
                          </div>
                          {isWatched(rec.movie) && (
                            <div className="mt-2">
                              <span className="inline-block px-2 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">
                                Already Watched
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPanel;