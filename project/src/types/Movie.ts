export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  director: string;
  mainActor: string;
  description: string;
}

export interface RecommendationWithScore {
  movie: Movie;
  relevanceScore: number;
  reason: string;
}

export type Genre = 'All' | 'Action' | 'Drama' | 'Comedy' | 'Sci-Fi' | 'Thriller';