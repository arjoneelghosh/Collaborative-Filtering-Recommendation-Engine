import React, { useState, useEffect } from 'react';
import { Movie, Genre, RecommendationWithScore } from './types/Movie';
import { getMoviesByGenre } from './data/movies';
import { generateRecommendations } from './utils/recommendations';
import Navbar from './components/Navbar';
import GenreDropdown from './components/GenreDropdown';
import MovieGrid from './components/MovieGrid';
import RecommendationPanel from './components/RecommendationPanel';
import PreviouslyWatched from './components/PreviouslyWatched';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>('All');
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendationWithScore[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setDisplayedMovies(getMoviesByGenre(selectedGenre));
  }, [selectedGenre]);

  const handleMovieClick = (movie: Movie) => {
    // Add to watched movies if not already watched
    if (!watchedMovies.some(watched => watched.id === movie.id)) {
      setWatchedMovies(prev => [...prev, movie]);
    }

    // Generate recommendations
    const newRecommendations = generateRecommendations(movie, watchedMovies);
    setRecommendations(newRecommendations);
    
    // Set selected movie and open panel
    setSelectedMovie(movie);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Discover Movies</h2>
              <p className="text-gray-400">Click on any movie to get personalized recommendations</p>
            </div>
            <GenreDropdown
              selectedGenre={selectedGenre}
              onGenreSelect={setSelectedGenre}
            />
          </div>

          {/* Movie Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                {selectedGenre === 'All' ? 'All Movies' : `${selectedGenre} Movies`}
              </h3>
              <span className="text-sm text-gray-400">
                {displayedMovies.length} movies
              </span>
            </div>
            <MovieGrid
              movies={displayedMovies}
              onMovieClick={handleMovieClick}
              watchedMovies={watchedMovies}
            />
          </div>

          {/* Previously Watched */}
          <PreviouslyWatched
            watchedMovies={watchedMovies}
            onMovieClick={handleMovieClick}
          />
        </div>
      </main>

      {/* Recommendation Panel */}
      <RecommendationPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        selectedMovie={selectedMovie}
        recommendations={recommendations}
        onMovieClick={handleMovieClick}
        watchedMovies={watchedMovies}
      />
    </div>
  );
}

export default App;