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
  //(para:React.SetStateAction<TvShowMovie[]>) => void;
  //setCombineMoviesTvShows?: React.Dispatch<React.SetStateAction<TvShowMovie[]>;

  likedList?: any;
  setLikedList?: any;

  handleAddToWatchList?: any;
  likePopularMovies?: any;
  likePopularTvShows?: any;
  likeTopRatedMovies?: any;
  likeTopRatedTvShows?: any;
  editPopularMovies?: any;
  savePopularMovies?: any;
  editPopularTvShows?: any;
  savePopularTvShows?: any;
  editTopRatedMovies?: any;
  saveTopRatedMovies?: any;

  editTopRatedTvShows?: any;

  saveTopRatedTvShows?: any;
}

export const DataContext = React.createContext<ContextData>({});
