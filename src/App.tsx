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
import { handleLikePropety } from "./helperFunctions";

export default function App() {
  const [popularMovies, setPopularMovies] = React.useState<TvShowMovie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState<TvShowMovie[]>([]);
  const [popularTvShows, setPopularTvShows] = React.useState<TvShowMovie[]>([]);
  const [topRatedTvShows, setTopRatedTvShows] = React.useState<TvShowMovie[]>(
    []
  );
  const [likedList, setLikedList] = React.useState<TvShowMovie[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const respPopularMovies = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiMoviesKey}&page=4`
      );
      const respMoviesTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiMoviesKey}&page=4`
      );
      const respTvShowsTopRated = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiTvShowsKey}&page=4`
      );
      const respTvShowsPopular = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiTvShowsKey}&page=4`
      );
      const dataPopularMovies = await respPopularMovies.json();
      const dataMoviesTopRated = await respMoviesTopRated.json();
      const dataTvShowsPopular = await respTvShowsPopular.json();
      const dataTvShowsTopRate = await respTvShowsTopRated.json();

      const modifiedPopularMovies = dataPopularMovies.results.map(
        (moviePop: TvShowMovie) => {
          return {
            ...moviePop,
            liked: false,
            editMode: false,
            writeComment: "",
          };
        }
      );
      const modifiedMoviesTopRated = dataMoviesTopRated.results.map(
        (tvShowTop: TvShowMovie) => {
          return {
            ...tvShowTop,
            liked: false,
            editMode: false,
            writeComment: "",
          };
        }
      );
      const modifiedTvShowsPopular = dataTvShowsPopular.results.map(
        (tvShowPop: TvShowMovie) => {
          return {
            ...tvShowPop,
            liked: false,
            editMode: false,
            writeComment: "",
            title: tvShowPop.name,
            release_date: tvShowPop.first_air_date,
          };
        }
      );
      const modifiedTvShowsTopRate = dataTvShowsTopRate.results.map(
        (tvShowTop: TvShowMovie) => {
          return {
            ...tvShowTop,
            liked: false,
            editMode: false,
            writeComment: "",
            title: tvShowTop.name,
            release_date: tvShowTop.first_air_date,
          };
        }
      );
      setPopularMovies([...modifiedPopularMovies]);
      setTopRatedMovies([...modifiedMoviesTopRated]);
      setPopularTvShows([...modifiedTvShowsPopular]);
      setTopRatedTvShows([...modifiedTvShowsTopRate]);
    };

    fetchData();
  }, []);

  const likePopularMovies = (item: TvShowMovie) => {
    const returnValue = handleLikePropety(popularMovies, item);
    setPopularMovies([...returnValue]);
  };

  const likePopularTvShows = (item: TvShowMovie) => {
    const returnValue = handleLikePropety(popularTvShows, item);
    setPopularTvShows([...returnValue]);
  };

  const likeTopRatedMovies = (item: TvShowMovie) => {
    const returnValue = handleLikePropety(topRatedMovies, item);
    setTopRatedMovies([...returnValue]);
  };

  const likeTopRatedTvShows = (item: TvShowMovie) => {
    const returnValue = handleLikePropety(topRatedTvShows, item);
    setTopRatedTvShows([...returnValue]);
  };

  const editPopularMovies = (selectedItem: TvShowMovie) => {
    const newLikedList = popularMovies.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setPopularMovies(newLikedList);
    }
  };

  // const alreadyEditedPopularMovies = (selectedItem: TvShowMovie, test) => {
  //   const newLikedList = popularMovies.map((item: TvShowMovie) => {
  //     if (selectedItem.id === item.id) {
  //       return {
  //         ...selectedItem,
  //         editMode: !item.editMode,
  //         writeComment:test //editMode ändras till true
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   if (newLikedList?.length) {
  //     setPopularMovies(newLikedList);
  //   }
  // };

  const editPopularTvShows = (selectedItem: TvShowMovie) => {
    const newLikedList = popularTvShows.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setPopularTvShows(newLikedList);
    }
  };

  const editTopRatedMovies = (selectedItem: TvShowMovie) => {
    const newLikedList = topRatedMovies.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setTopRatedMovies(newLikedList);
    }
  };

  const editTopRatedTvShows = (selectedItem: TvShowMovie) => {
    const newLikedList = topRatedTvShows.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setTopRatedTvShows(newLikedList);
    }
  };

  const savePopularMovies = (selectedItem: TvShowMovie, inputVal: string) => {
    const newLikedList = popularMovies.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
          writeComment: inputVal,
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setPopularMovies(newLikedList);
    }
  };

  const savePopularTvShows = (selectedItem: TvShowMovie, inputVal: string) => {
    const newLikedList = popularTvShows.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
          writeComment: inputVal,
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setPopularTvShows(newLikedList);
    }
  };

  const saveTopRatedMovies = (selectedItem: TvShowMovie, inputVal: string) => {
    const newLikedList = topRatedMovies.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
          writeComment: inputVal,
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setTopRatedMovies(newLikedList);
    }
  };

  const saveTopRatedTvShows = (selectedItem: TvShowMovie, inputVal: string) => {
    const newLikedList = topRatedTvShows.map((item: TvShowMovie) => {
      if (selectedItem.id === item.id) {
        return {
          ...selectedItem,
          editMode: !item.editMode, //editMode ändras till true
          writeComment: inputVal,
        };
      } else {
        return item;
      }
    });
    if (newLikedList?.length) {
      setTopRatedTvShows(newLikedList);
    }
  };

  React.useEffect(() => {
    const filterPopularMovies = popularMovies.filter(
      (item: TvShowMovie) => item.liked
    );
    const filterPopularTvShows = popularTvShows.filter(
      (item: TvShowMovie) => item.liked
    );
    const filterTopRatedMovies = topRatedMovies.filter(
      (item: TvShowMovie) => item.liked
    );
    const filterTopRatedTvShows = topRatedTvShows.filter(
      (item: TvShowMovie) => item.liked
    );
    setLikedList([
      ...filterPopularTvShows,
      ...filterPopularMovies,
      ...filterTopRatedTvShows,
      ...filterTopRatedMovies,
    ]);
  }, [popularMovies, popularTvShows, topRatedMovies, topRatedTvShows]);

  return (
    <DataContext.Provider
      value={{
        likedList,
        setLikedList,
        popularMovies,
        setPopularMovies,
        topRatedMovies,
        setTopRatedMovies,
        popularTvShows,
        setPopularTvShows,
        topRatedTvShows,
        setTopRatedTvShows,
        likePopularMovies,
        likePopularTvShows,
        likeTopRatedMovies,
        likeTopRatedTvShows,
        editPopularMovies,
        savePopularMovies,
        editPopularTvShows,
        savePopularTvShows,
        editTopRatedMovies,
        saveTopRatedMovies,
        editTopRatedTvShows,
        saveTopRatedTvShows,
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
