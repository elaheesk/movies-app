import React from "react";
import { Grid, Typography } from "@mui/material";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const PopularMovies = () => {
  const dataContext = React.useContext(DataContext);

  return (
    <Grid container direction="column">
      <Grid item marginBottom={4}>
        <Typography component="h1" fontWeight={500} variant="h4" gutterBottom>
          Popular movies
        </Typography>
      </Grid>
      <Grid item container>
        {dataContext?.popularMovies?.map((movie: TvShowMovie) => (
          <CardLayout
            key={movie.id}
            showObject={movie}
            linkName="popularmovies"
            handleLike={dataContext?.likePopularMovies}
            handleEdit={dataContext?.editPopularMovies}
            handleSave={dataContext?.savePopularMovies}
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default PopularMovies;
