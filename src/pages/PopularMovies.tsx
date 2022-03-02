import React from "react";
import { Grid, Typography } from "@mui/material";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const PopularMovies = () => {
  const dataContext = React.useContext(DataContext);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Popular movies</Typography>
      </Grid>
      <Grid item container>
        {dataContext?.popularMovies?.map((movie: TvShowMovie) => (
          <CardLayout
            key={movie.id}
            showObject={movie}
            linkName="popularmovies"
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default PopularMovies;
