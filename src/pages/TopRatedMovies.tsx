import { Grid, Typography } from "@mui/material";
import React from "react";
import CardLayout from "../components/CardLayout";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiMoviesKey } from "../secret";

const TopRatedMovies = () => {
  const dataContext = React.useContext(DataContext);

  //React.useEffect(() => {
  //  const fetchData = async () => {
  //    const respTvShowsTopRated = await fetch(
  //      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiMoviesKey}&page=4`,
  //    );
  //    const dataa = await respTvShowsTopRated.json();

  //    const addNewProp = dataa.results.map((tvShowTop: TvShowMovie) => {
  //      return {
  //        ...tvShowTop,
  //        liked: false,
  //      };
  //    });
  //    if (addNewProp.length) {
  //      dataContext?.setTopRatedMovies([...addNewProp]);
  //    }
  //  };
  //  fetchData();
  //}, []);

  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        <Typography>Top-rated movies</Typography>
      </Grid>
      <Grid item container>
        {" "}
        {dataContext?.topRatedMovies?.map((topMovie: TvShowMovie) => (
          <CardLayout
            key={topMovie.id}
            showObject={topMovie}
            linkName="topratedmovies"
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default TopRatedMovies;