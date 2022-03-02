import React from "react";
import { DataContext } from "./DataContext";
import PopularMovies from "./pages/PopularMovies";
import PopularTvShows from "./pages/PopularTvShows";
import TopRatedMovies from "./pages/TopRatedMovies";
import TopRatedTvShows from "./pages/TopRatedTvShows";
import MyWatchList from "./pages/MyWatchList";
import Home from "./pages/Home";
import DetailedPage from "./pages/DetailedPage";
import DetailedPageTvShows from "./pages/DetailedPageTvShows";
import SideNavigationBar from "./components/SideNavigationBar";
import { apiMoviesKey } from "./secret";
import { apiTvShowsKey } from "./secret";
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TvShowMovie } from "./types";

export default function App() {
  const [popularMovies, setPopularMovies] = React.useState<TvShowMovie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState<TvShowMovie[]>([]);
  const [popularTvShows, setPopularTvShows] = React.useState<TvShowMovie[]>([]);
  const [topRatedTvShows, setTopRatedTvShows] = React.useState<TvShowMovie[]>(
    []
  );
  const [combineMoviesTvShows, setCombineMoviesTvShows] = React.useState<
    TvShowMovie[]
  >([]);
  const [addedToWatchList, setAddedToWatchList] = React.useState<TvShowMovie[]>(
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const respPopularMovies = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiMoviesKey}&page=4`
      );
      const dataa = await respPopularMovies.json();

      const addNewProp = dataa.results.map((moviePop: TvShowMovie) => {
        return {
          ...moviePop,
          liked: false,
          editMode: false,
          writeComment: "",
        };
      });

      setPopularMovies([...addNewProp]);

      const respMoviesTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiMoviesKey}&page=4`
      );
      const data = await respMoviesTopRated.json();
      const addNewProps = data.results.map((tvShowTop: TvShowMovie) => {
        return {
          ...tvShowTop,
          liked: false,
          editMode: false,
          writeComment: "",
        };
      });
      setTopRatedMovies([...addNewProps]);
      const respTvShowsPopular = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiTvShowsKey}&page=4`
      );
      const dataaa = await respTvShowsPopular.json();

      const addNewPropss = dataaa.results.map((tvShowPop: TvShowMovie) => {
        return {
          ...tvShowPop,
          liked: false,
          editMode: false,
          writeComment: "",
          title: tvShowPop.name,
          release_date: tvShowPop.first_air_date,
        };
      });
      setPopularTvShows([...addNewPropss]);
      const respTvShowsTopRated = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiTvShowsKey}&page=4`
      );
      const dat = await respTvShowsTopRated.json();

      const addNewPropsss = dat.results.map((tvShowTop: TvShowMovie) => {
        return {
          ...tvShowTop,
          liked: false,
          editMode: false,
          writeComment: "",
          title: tvShowTop.name,
          release_date: tvShowTop.first_air_date,
        };
      });

      setTopRatedTvShows([...addNewPropsss]);

      const allFourArrays = [
        ...addNewProp,
        ...addNewProps,
        ...addNewPropss,
        ...addNewPropsss,
      ];
      setCombineMoviesTvShows(allFourArrays);
      console.log("allFourArrays", allFourArrays);
    };

    fetchData();
  }, []);

  const handleAddToWatchList = (theLikedMovieOrShow: TvShowMovie) => {
    const changePropertyValue = combineMoviesTvShows.map((every) => {
      if (theLikedMovieOrShow.id === every.id) {
        return { ...theLikedMovieOrShow, liked: !every.liked }; //här ändrar vi värdet till motsatsen av defaultvärdet av liked. om liked är true ändras det till motsatsen false, om liked är false ändras det till motstsen true. liked: !product.liked
      } else {
        return every;
      }
    });
    setCombineMoviesTvShows(changePropertyValue);
  };

  React.useEffect(() => {
    const myLikedMoviesAndShows = combineMoviesTvShows.filter(
      (every: TvShowMovie) => {
        if (every.liked === true) {
          return every;
        }
      }
    );

    setAddedToWatchList(myLikedMoviesAndShows);
  }, [combineMoviesTvShows]);

  return (
    <DataContext.Provider
      value={{
        popularMovies,
        setPopularMovies,
        topRatedMovies,
        setTopRatedMovies,
        popularTvShows,
        setPopularTvShows,
        topRatedTvShows,
        setTopRatedTvShows,
        combineMoviesTvShows,
        setCombineMoviesTvShows,
        addedToWatchList,
        setAddedToWatchList,
        handleAddToWatchList,
      }}
    >
      <BrowserRouter>
        <Grid container>
          <Grid item xs={2} paddingTop={4}>
            <SideNavigationBar />
          </Grid>
          <Grid item xs={10} paddingTop={5}>
            <Routes>
              <Route path="popularmovies/:id" element={<DetailedPage />} />
              <Route path="topratedmovies/:id" element={<DetailedPage />} />
              <Route
                path="populartvshows/:id"
                element={<DetailedPageTvShows />}
              />
              <Route
                path="topratedtvshows/:id"
                element={<DetailedPageTvShows />}
              />
              <Route path="popularmovies" element={<PopularMovies />} />
              <Route path="topratedmovies" element={<TopRatedMovies />} />
              <Route path="populartvshows" element={<PopularTvShows />} />
              <Route path="topratedtvshows" element={<TopRatedTvShows />} />
              <Route path="mywatchlist" element={<MyWatchList />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
