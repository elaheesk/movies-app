import React, { createContext, useContext } from "react";
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

  combineMoviesTvShows?: TvShowMovie[];
  setCombineMoviesTvShows?: any;
  //(para:React.SetStateAction<TvShowMovie[]>) => void;
  //setCombineMoviesTvShows?: React.Dispatch<React.SetStateAction<TvShowMovie[]>;

  addedToWatchList?: TvShowMovie[] | undefined;
  setAddedToWatchList?: (para: TvShowMovie[]) => void;

  handleAddToWatchList?: any;
}

export const DataContext = createContext<ContextData>({});
