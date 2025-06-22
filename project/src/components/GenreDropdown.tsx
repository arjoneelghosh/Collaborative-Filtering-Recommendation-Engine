import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Genre } from '../types/Movie';

interface GenreDropdownProps {
  selectedGenre: Genre;
  onGenreSelect: (genre: Genre) => void;
}

const genres: Genre[] = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Thriller'];

const GenreDropdown: React.FC<GenreDropdownProps> = ({ selectedGenre, onGenreSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-xl text-white transition-all duration-200 backdrop-blur-sm"
      >
        <span className="font-medium">Genre: {selectedGenre}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl overflow-hidden z-10">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => {
                onGenreSelect(genre);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-gray-700/50 transition-colors duration-150 ${
                selectedGenre === genre ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreDropdown;