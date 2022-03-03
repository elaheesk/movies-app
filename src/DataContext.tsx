import React from "react";
import { TvShowMovie } from "./types";

export interface ContextData {
  popularMovies?: TvShowMovie[];
  setPopularMovies?: (para: TvShowMovie[]) => void;

  topRatedMovies?: TvShowMovie[];
  setTopRatedMovies?: (para: TvShowMovie[]) => void;

  popularTvShows?: TvShowMovie[];
  setPopularTvShows?: (para: TvShowMovie[]) => void;

  topRatedTvShows?: TvShowMovie[];
  setTopRatedTvShows?: (para: TvShowMovie[]) => void;

  likedList?: any;
  setLikedList?: any;

  handleAddToWatchList?: any;
  likePopularMovies?: (para: TvShowMovie) => void;
  likePopularTvShows?: (para: TvShowMovie) => void;
  likeTopRatedMovies?: (para: TvShowMovie) => void;
  likeTopRatedTvShows?: (para: TvShowMovie) => void;
  editPopularMovies?: (para: TvShowMovie) => void;
  savePopularMovies?: (para: TvShowMovie, para2: string) => void;
  editPopularTvShows?: (para: TvShowMovie) => void;
  savePopularTvShows?: (para: TvShowMovie, para2: string) => void;
  editTopRatedMovies?: (para: TvShowMovie) => void;
  saveTopRatedMovies?: (para: TvShowMovie, para2: string) => void;
  editTopRatedTvShows?: (para: TvShowMovie) => void;
  saveTopRatedTvShows?: (para: TvShowMovie, para2: string) => void;
}

export const DataContext = React.createContext<ContextData>({});
