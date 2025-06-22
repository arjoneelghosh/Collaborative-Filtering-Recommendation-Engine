import React from 'react';
import { Star, Calendar, User, Camera } from 'lucide-react';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
  isWatched?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick, isWatched = false }) => {
  return (
    <div 
      onClick={() => onMovieClick(movie)}
      className={`group relative bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 ${
        isWatched ? 'ring-2 ring-blue-500/30' : ''
      }`}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center space-x-3 text-sm text-gray-300 mb-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{movie.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{movie.year}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-400 space-y-1">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span className="truncate">{movie.mainActor}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Camera className="h-3 w-3" />
            <span className="truncate">{movie.director}</span>
          </div>
        </div>
        
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">
            {movie.genre}
          </span>
        </div>
      </div>
      
      {isWatched && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          Watched
        </div>
      )}
    </div>
  );
};

export default MovieCard;