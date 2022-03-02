import { Grid, Typography } from "@mui/material";
import React from "react";
import CardLayout from "../components/CardLayout";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiMoviesKey } from "../secret";

const TopRatedMovies = () => {
  const dataContext = React.useContext(DataContext);


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