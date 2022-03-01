import React from "react";
import {Grid, Typography} from "@mui/material";

import {TvShowMovie} from "../types";
import {DataContext} from "../DataContext";
import CardLayout from "../components/CardLayout";

const PopularMovies = () => {
  const dataContext = React.useContext(DataContext);

  //React.useEffect(() => {
  //  const fetchData = async () => {
  //    const respTvShowsPopular = await fetch(
  //      `https://api.themoviedb.org/3/movie/popular?api_key=${apiMoviesKey}&page=4`,
  //    );
  //    const dataa = await respTvShowsPopular.json();

  //    const addNewProp = dataa.results.map((moviePop: TvShowMovie) => {
  //      return {
  //        ...moviePop,
  //        liked: false,
  //      };
  //    });
  //    if (addNewProp.length) {
  //      dataContext?.setPopularMovies([...addNewProp]);
  //    }
  //    console.log("popularmovies", addNewProp);
  //  };
  //  fetchData();
  //}, []);

  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        <Typography>Popular movies</Typography>
      </Grid>
      <Grid item container>
        {" "}
        {dataContext?.popularMovies?.map((movie: TvShowMovie) => (
          <CardLayout key={movie.id} showObject={movie} linkName="popularmovies" />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default PopularMovies;
