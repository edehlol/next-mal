export interface Anime {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  trailer_url: string | null;
  related: any;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rating: string;
  source: string;
  genres: string[];
  duration: number;
  background: string;
  premiered: string;
  broadcast: string;
  producers: string[];
  licensors: string[];
  studios: string[];
  opening_themes: string[];
  ending_themes: string[];
}
